"use client";

import Link from "next/link";
import { useQueries } from "@tanstack/react-query";
import { useAdminAuth } from "../auth/AdminAuthProvider";
import { listHrQueue, listPsychologists } from "../lib/adminApi";
import { ADMIN_ROUTES } from "../lib/config";
import { adminQueryKeys } from "../lib/queryClient";
import { AdminError, AdminLoading } from "./AdminState";
import { AdminPageHeader } from "./AdminPageHeader";

type SummaryCard = {
  label: string;
  value: number | null;
  href: string;
  note?: string;
};

export function DashboardOverview() {
  const { me, permissions } = useAdminAuth();
  const canReadPsych = permissions.includes("psychologist.read");
  const canPublish = permissions.includes("psychologist.publish");

  const results = useQueries({
    queries: [
      {
        queryKey: adminQueryKeys.hrQueue({ page: 1, pageSize: 5 }),
        queryFn: () => listHrQueue({ page: 1, pageSize: 5 }),
        enabled: canReadPsych,
      },
      {
        queryKey: adminQueryKeys.psychologists({ publicationStatus: "LIVE", page: 1, pageSize: 1 }),
        queryFn: () => listPsychologists({ publicationStatus: "LIVE", page: 1, pageSize: 1 }),
        enabled: canReadPsych,
      },
      {
        queryKey: adminQueryKeys.psychologists({
          publicationStatus: "VERIFIED_UNPUBLISHED",
          page: 1,
          pageSize: 5,
        }),
        queryFn: () =>
          listPsychologists({
            publicationStatus: "VERIFIED_UNPUBLISHED",
            page: 1,
            pageSize: 5,
          }),
        enabled: canReadPsych,
      },
      {
        queryKey: adminQueryKeys.psychologists({
          publicationStatus: "PENDING_VERIFICATION",
          page: 1,
          pageSize: 1,
        }),
        queryFn: () =>
          listPsychologists({
            publicationStatus: "PENDING_VERIFICATION",
            page: 1,
            pageSize: 1,
          }),
        enabled: canReadPsych,
      },
    ],
  });

  const [hrQueue, live, unpublished, pendingVerification] = results;
  const loading = canReadPsych && results.some((r) => r.isLoading && !r.data);
  const error = results.find((r) => r.isError)?.error;
  const errorMessage =
    error instanceof Error ? error.message : error ? "Failed to load dashboard data" : null;

  const cards: SummaryCard[] = [
    {
      label: "Awaiting HR review",
      value: canReadPsych ? (hrQueue.data?.total ?? null) : null,
      href: ADMIN_ROUTES.applications,
      note: !canReadPsych ? "Needs psychologist.read" : undefined,
    },
    {
      label: "Pending verification",
      value: canReadPsych ? (pendingVerification.data?.total ?? null) : null,
      href: ADMIN_ROUTES.verification,
    },
    {
      label: "Ready to publish",
      value: canReadPsych ? (unpublished.data?.total ?? null) : null,
      href: ADMIN_ROUTES.publication,
      note: !canPublish ? "Publish needs psychologist.publish" : undefined,
    },
    {
      label: "Published (LIVE)",
      value: canReadPsych ? (live.data?.total ?? null) : null,
      href: ADMIN_ROUTES.psychologists,
    },
  ];

  return (
    <div className="admin-page">
      <AdminPageHeader
        title="Operations overview"
        description={`Signed in as ${me?.email ?? "admin"}. Counts come from staff admin APIs — not hardcoded.`}
      />

      {!canReadPsych ? (
        <div className="admin-card admin-card--warn">
          <p>
            Your membership is missing <code>psychologist.read</code>. Queue counts stay hidden until
            roles are updated.
          </p>
        </div>
      ) : null}

      {loading ? <AdminLoading label="Loading operational counts…" /> : null}
      {errorMessage && !loading ? (
        <AdminError
          message={errorMessage}
          onRetry={() => results.forEach((r) => void r.refetch())}
        />
      ) : null}

      <div className="admin-stat-grid">
        {cards.map((card) => (
          <Link key={card.label} href={card.href} className="admin-stat-card">
            <p className="admin-stat-card__label">{card.label}</p>
            <p className="admin-stat-card__value">
              {card.value === null ? "—" : card.value}
            </p>
            {card.note ? <p className="admin-stat-card__note">{card.note}</p> : null}
          </Link>
        ))}
      </div>

      <div className="admin-split">
        <section className="admin-card">
          <div className="admin-card__header">
            <h2 className="admin-card__title">HR queue</h2>
            <Link href={ADMIN_ROUTES.applications} className="admin-text-link">
              View applications
            </Link>
          </div>
          {!canReadPsych ? (
            <p className="admin-muted">Permission required.</p>
          ) : hrQueue.data?.items.length ? (
            <ul className="admin-queue">
              {hrQueue.data.items.map((row) => (
                <li key={row.id}>
                  <div>
                    <p className="admin-queue__name">
                      {row.legalFullName || row.displayName || "Applicant"}
                    </p>
                    <p className="admin-queue__meta">
                      {row.hrApprovalStatus}
                      {row.email ? ` · ${row.email}` : ""}
                    </p>
                  </div>
                  <span className="admin-badge">{row.publicationStatus}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-muted">No applications awaiting HR review.</p>
          )}
        </section>

        <section className="admin-card">
          <div className="admin-card__header">
            <h2 className="admin-card__title">Ready for publication</h2>
            <Link href={ADMIN_ROUTES.publication} className="admin-text-link">
              Publication
            </Link>
          </div>
          {!canReadPsych ? (
            <p className="admin-muted">Permission required.</p>
          ) : unpublished.data?.items.length ? (
            <ul className="admin-queue">
              {unpublished.data.items.map((row) => (
                <li key={row.id}>
                  <div>
                    <p className="admin-queue__name">
                      {row.displayName || row.legalFullName || "Psychologist"}
                    </p>
                    <p className="admin-queue__meta">{row.publicationStatus}</p>
                  </div>
                  <span className="admin-badge admin-badge--mint">VERIFIED</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="admin-muted">No verified unpublished psychologists.</p>
          )}
        </section>
      </div>

      <section className="admin-card">
        <h2 className="admin-card__title">Backend gaps on this dashboard</h2>
        <ul className="admin-list">
          <li>
            No dedicated aggregate endpoint for document-review or action-required counts — those
            modules will derive queues from psychologist/document APIs in later phases.
          </li>
          <li>
            Document and verification queues are not listed globally (only per psychologist today).
          </li>
        </ul>
      </section>
    </div>
  );
}
