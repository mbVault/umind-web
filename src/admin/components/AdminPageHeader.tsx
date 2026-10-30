type Props = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

export function AdminPageHeader({ title, description, actions }: Props) {
  return (
    <div className="admin-page-header">
      <div>
        <h1 className="admin-shell__heading">{title}</h1>
        {description ? <p className="admin-shell__copy">{description}</p> : null}
      </div>
      {actions ? <div className="admin-page-header__actions">{actions}</div> : null}
    </div>
  );
}
