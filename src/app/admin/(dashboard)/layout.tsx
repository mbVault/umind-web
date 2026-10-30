import { AdminRequireAuth } from "@/admin/components/AdminRequireAuth";

/**
 * Persistent authenticated console layout.
 * Remains mounted across /admin/* child navigations (except /admin/login).
 */
export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <AdminRequireAuth>{children}</AdminRequireAuth>;
}
