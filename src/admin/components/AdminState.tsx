export function AdminLoading({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="admin-state">
      <p>{label}</p>
    </div>
  );
}

export function AdminError({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="admin-state admin-state--error" role="alert">
      <p>{message}</p>
      {onRetry ? (
        <button type="button" className="u-btn u-btn--ghost" onClick={onRetry}>
          Retry
        </button>
      ) : null}
    </div>
  );
}
