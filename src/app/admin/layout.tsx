import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "U Mind Admin",
  description: "U Mind staff administration",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="admin-shell">{children}</div>;
}
