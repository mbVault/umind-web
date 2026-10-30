"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { ADMIN_ROUTES } from "../lib/config";
import { clearAdminQueryCache } from "../lib/queryClient";
import {
  assertActiveAdminSession,
  StaffApiError,
  type StaffMe,
} from "../lib/staffApi";
import { EmailPassword, ensureSuperTokens, Session } from "../lib/supertokens";

type AdminAuthState = {
  ready: boolean;
  me: StaffMe | null;
  permissions: string[];
  signInWithPassword: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  refresh: () => Promise<void>;
};

const AdminAuthContext = createContext<AdminAuthState | null>(null);

type Props = {
  children: React.ReactNode;
  /** When true, redirect unauthenticated users to login (admin shell). */
  requireAuth?: boolean;
};

export function AdminAuthProvider({ children, requireAuth = false }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [me, setMe] = useState<StaffMe | null>(null);
  const [permissions, setPermissions] = useState<string[]>([]);

  const clear = useCallback(() => {
    setMe(null);
    setPermissions([]);
  }, []);

  const refresh = useCallback(async () => {
    ensureSuperTokens();
    const exists = await Session.doesSessionExist();
    if (!exists) {
      clear();
      return;
    }
    const session = await assertActiveAdminSession();
    setMe(session.me);
    setPermissions(session.permissions);
  }, [clear]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        ensureSuperTokens();
        await refresh();
      } catch {
        if (!cancelled) {
          clearAdminQueryCache();
          clear();
        }
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [clear, refresh]);

  useEffect(() => {
    if (!ready || !requireAuth) return;
    if (!me) {
      const next = encodeURIComponent(pathname || ADMIN_ROUTES.root);
      router.replace(`${ADMIN_ROUTES.login}?next=${next}`);
    }
  }, [ready, requireAuth, me, pathname, router]);

  const signInWithPassword = useCallback(
    async (email: string, password: string) => {
      ensureSuperTokens();
      const result = await EmailPassword.signIn({
        formFields: [
          { id: "email", value: email.trim().toLowerCase() },
          { id: "password", value: password },
        ],
      });

      if (result.status === "WRONG_CREDENTIALS_ERROR") {
        throw new StaffApiError(401, "Invalid email or password");
      }
      if (result.status === "FIELD_ERROR") {
        const first = result.formFields.find((f) => f.error)?.error;
        throw new StaffApiError(400, first ?? "Check your email and password");
      }
      if (result.status !== "OK") {
        throw new StaffApiError(401, "Sign-in failed");
      }

      const session = await assertActiveAdminSession();
      setMe(session.me);
      setPermissions(session.permissions);
    },
    [],
  );

  const signOut = useCallback(async () => {
    ensureSuperTokens();
    await Session.signOut().catch(() => undefined);
    clearAdminQueryCache();
    clear();
    router.replace(ADMIN_ROUTES.login);
  }, [clear, router]);

  const value = useMemo(
    () => ({
      ready,
      me,
      permissions,
      signInWithPassword,
      signOut,
      refresh,
    }),
    [ready, me, permissions, signInWithPassword, signOut, refresh],
  );

  if (requireAuth && (!ready || !me)) {
    return (
      <div className="admin-boot">
        <p className="admin-boot__text">Checking admin session…</p>
      </div>
    );
  }

  return (
    <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>
  );
}

export function useAdminAuth(): AdminAuthState {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return ctx;
}
