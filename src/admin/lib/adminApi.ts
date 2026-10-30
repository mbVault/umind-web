"use client";

import { staffFetch } from "./staffApi";

export type PsychologistAdmin = {
  id: string;
  accountId: string;
  legalFullName: string | null;
  displayName: string | null;
  email?: string | null;
  hrApprovalStatus: string;
  publicationStatus: string;
  accountStatus: string;
  onboardingStep: string;
  applicantNextAction?: string;
  applicantMessage?: string | null;
  applicationSubmittedAt?: string | null;
  publishedAt?: string | null;
  specialisations?: string[];
  languages?: string[];
  checks?: {
    id: string;
    type: string;
    status: string;
    reason: string | null;
    reviewedAt: string | null;
  }[];
};

export type Paginated<T> = {
  page: number;
  pageSize: number;
  total: number;
  items: T[];
};

export type AdminMember = {
  id: string;
  status: string;
  revokedAt: string | null;
  account: { id: string; email: string | null; status: string };
  roles: string[];
};

export type AuditLogRow = {
  id: string;
  actorAccountId: string | null;
  action: string;
  targetType: string | null;
  targetId: string | null;
  metadata: unknown;
  createdAt: string;
};

export async function listPsychologists(params: {
  page?: number;
  pageSize?: number;
  publicationStatus?: string;
  search?: string;
}): Promise<Paginated<PsychologistAdmin>> {
  const q = new URLSearchParams();
  q.set("page", String(params.page ?? 1));
  q.set("pageSize", String(params.pageSize ?? 20));
  if (params.publicationStatus) q.set("publicationStatus", params.publicationStatus);
  if (params.search) q.set("search", params.search);
  return staffFetch<Paginated<PsychologistAdmin>>(`/admin/psychologists/?${q}`);
}

export async function listHrQueue(params: {
  page?: number;
  pageSize?: number;
}): Promise<Paginated<PsychologistAdmin>> {
  const q = new URLSearchParams();
  q.set("page", String(params.page ?? 1));
  q.set("pageSize", String(params.pageSize ?? 20));
  return staffFetch<Paginated<PsychologistAdmin>>(`/admin/psychologists/hr-queue?${q}`);
}

export async function getPsychologist(id: string): Promise<PsychologistAdmin> {
  return staffFetch<PsychologistAdmin>(`/admin/psychologists/${id}`);
}

export async function listAdminMembers(): Promise<{ members: AdminMember[] }> {
  return staffFetch<{ members: AdminMember[] }>("/admin/members");
}

export async function listAuditLogs(params: {
  page?: number;
  pageSize?: number;
  action?: string;
}): Promise<Paginated<AuditLogRow>> {
  const q = new URLSearchParams();
  q.set("page", String(params.page ?? 1));
  q.set("pageSize", String(params.pageSize ?? 20));
  if (params.action) q.set("action", params.action);
  return staffFetch<Paginated<AuditLogRow>>(`/admin/audit-logs?${q}`);
}
