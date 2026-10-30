"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { getAdminQueryClient } from "../lib/queryClient";

export function AdminQueryProvider({ children }: { children: React.ReactNode }) {
  const [client] = useState(() => getAdminQueryClient());
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
