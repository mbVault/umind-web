import { SiteHeader } from "@/components/layout/SiteHeader";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  );
}
