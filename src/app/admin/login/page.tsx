import { Suspense } from "react";
import { AdminAuthProvider } from "@/admin/auth/AdminAuthProvider";
import { AdminLoginForm } from "@/admin/components/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <AdminAuthProvider>
      <Suspense
        fallback={
          <div className="admin-boot">
            <p className="admin-boot__text">Loading…</p>
          </div>
        }
      >
        <AdminLoginForm />
      </Suspense>
    </AdminAuthProvider>
  );
}
