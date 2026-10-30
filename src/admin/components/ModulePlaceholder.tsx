import Link from "next/link";
import { ADMIN_ROUTES } from "../lib/config";
import { AdminPageHeader } from "./AdminPageHeader";

type Props = {
  title: string;
  description: string;
  phase: string;
  backendReady?: string[];
  backendGaps?: string[];
};

export function ModulePlaceholder({
  title,
  description,
  phase,
  backendReady = [],
  backendGaps = [],
}: Props) {
  return (
    <div className="admin-page">
      <AdminPageHeader title={title} description={description} />
      <div className="admin-card">
        <p className="admin-muted">
          Scheduled for <strong>{phase}</strong>. Navigation and layout are ready; this module’s
          full UI ships next without remounting the dashboard shell.
        </p>
        {backendReady.length > 0 ? (
          <>
            <h3 className="admin-card__subheading">Backend available</h3>
            <ul className="admin-list">
              {backendReady.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
        {backendGaps.length > 0 ? (
          <>
            <h3 className="admin-card__subheading">Backend gaps</h3>
            <ul className="admin-list">
              {backendGaps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
        <Link href={ADMIN_ROUTES.root} className="u-btn u-btn--secondary" style={{ marginTop: 16 }}>
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}
