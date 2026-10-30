"use client";

import { QueryClient } from "@tanstack/react-query";

let sharedClient: QueryClient | null = null;

export function createAdminQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30_000,
        gcTime: 5 * 60_000,
        refetchOnWindowFocus: true,
        retry: 1,
      },
    },
  });
}

export function getAdminQueryClient(): QueryClient {
  if (!sharedClient) {
    sharedClient = createAdminQueryClient();
  }
  return sharedClient;
}

/** Wipe cached admin data on sign-out / revoked session. */
export function clearAdminQueryCache(): void {
  sharedClient?.clear();
}

/** Domain-oriented query keys for invalidation after mutations. */
export const adminQueryKeys = {
  me: ["admin", "me"] as const,
  permissions: ["admin", "permissions"] as const,
  psychologists: (params?: Record<string, unknown>) =>
    ["admin", "psychologists", params ?? {}] as const,
  hrQueue: (params?: Record<string, unknown>) =>
    ["admin", "hr-queue", params ?? {}] as const,
  psychologist: (id: string) => ["admin", "psychologist", id] as const,
  documents: (psychologistId: string) =>
    ["admin", "documents", psychologistId] as const,
  members: ["admin", "members"] as const,
  auditLogs: (params?: Record<string, unknown>) =>
    ["admin", "audit-logs", params ?? {}] as const,
  dashboard: ["admin", "dashboard"] as const,
};
