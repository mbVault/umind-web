"use client";

import { API_BASE_URL, STAFF_API_PREFIX } from "./config";
import { ensureSuperTokens, Session } from "./supertokens";

export class StaffApiError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "StaffApiError";
    this.status = status;
  }
}

export type StaffMe = {
  id: string;
  email: string | null;
  status: string;
  roles: string[];
  hasPsychologistProfile: boolean;
  hasAdminMembership: boolean;
};

export type StaffAuthMethods = {
  configured: boolean;
  methods: {
    emailPassword: boolean;
    emailOtp: boolean;
    phoneOtp: boolean;
    google: boolean;
    apple: boolean;
  };
};

type ApiEnvelope<T> = {
  status?: string;
  data?: T;
  message?: string;
};

export async function staffFetch<T>(path: string, init?: RequestInit): Promise<T> {
  ensureSuperTokens();

  const response = await fetch(`${API_BASE_URL}${STAFF_API_PREFIX}${path}`, {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const payload = (await response.json().catch(() => ({}))) as ApiEnvelope<T>;

  if (!response.ok || payload.status !== "success" || payload.data === undefined) {
    throw new StaffApiError(
      response.status || 0,
      payload.message ?? "Staff API request failed",
    );
  }

  return payload.data;
}

export async function fetchStaffAuthMethods(): Promise<StaffAuthMethods> {
  return staffFetch<StaffAuthMethods>("/auth/methods");
}

export async function fetchStaffMe(): Promise<StaffMe> {
  return staffFetch<StaffMe>("/me/");
}

export async function fetchAdminPermissions(): Promise<string[]> {
  const data = await staffFetch<{ permissions: string[] }>("/me/permissions");
  return data.permissions;
}

/**
 * After SuperTokens sign-in: require provisioned ADMIN + active membership.
 * Signs out and throws if the session is not an admin.
 */
export async function assertActiveAdminSession(): Promise<{
  me: StaffMe;
  permissions: string[];
}> {
  ensureSuperTokens();

  const exists = await Session.doesSessionExist();
  if (!exists) {
    throw new StaffApiError(401, "Not signed in");
  }

  let me: StaffMe;
  try {
    me = await fetchStaffMe();
  } catch (err) {
    await Session.signOut().catch(() => undefined);
    if (err instanceof StaffApiError && err.status === 403) {
      throw new StaffApiError(
        403,
        "This account is not provisioned for staff access.",
      );
    }
    throw err;
  }

  if (!me.roles.includes("ADMIN") || !me.hasAdminMembership) {
    await Session.signOut().catch(() => undefined);
    throw new StaffApiError(
      403,
      "Admin access required. This login is for U Mind staff admins only.",
    );
  }

  try {
    const permissions = await fetchAdminPermissions();
    return { me, permissions };
  } catch (err) {
    await Session.signOut().catch(() => undefined);
    if (err instanceof StaffApiError && err.status === 403) {
      throw new StaffApiError(
        403,
        "Admin membership is inactive or revoked.",
      );
    }
    throw err;
  }
}
