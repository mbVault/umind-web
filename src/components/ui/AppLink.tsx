"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type AppLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Thin wrapper around next/link so in-app navigation stays SPA-like
 * (client transitions, prefetch). Prefer this over raw <a> for internal routes.
 */
export function AppLink({ href, children, ...props }: AppLinkProps) {
  return (
    <Link href={href} prefetch={true} {...props}>
      {children}
    </Link>
  );
}
