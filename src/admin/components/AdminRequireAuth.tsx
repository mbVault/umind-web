"use client";

import { AdminAuthProvider } from "../auth/AdminAuthProvider";
import { AdminQueryProvider } from "../providers/AdminQueryProvider";
import { AdminShell } from "./AdminShell";

/** Authenticated admin console: session gate + React Query + persistent shell. */
export function AdminRequireAuth({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider requireAuth>
      <AdminQueryProvider>
        <AdminShell>{children}</AdminShell>
      </AdminQueryProvider>
    </AdminAuthProvider>
  );
}
