"use client";

import { useId, useState, type ReactNode } from "react";

export function AdminEditorRow({
  badge,
  children,
  deleteAction,
  meta,
  title,
}: {
  badge?: string;
  children: ReactNode;
  deleteAction: ReactNode;
  meta: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className={`admin-editor-row${badge ? " has-badge" : ""}${open ? " is-open" : ""}`}>
      <header className="admin-editor-row-header">
        {badge ? <span className="admin-editor-row-badge">{badge}</span> : null}
        <div className="admin-editor-row-copy">
          <strong>{title}</strong>
          <small>{meta}</small>
        </div>
        <div className="admin-editor-row-actions">
          <button
            className="admin-lecture-edit-button"
            type="button"
            aria-controls={panelId}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? "Close" : "Edit"}
          </button>
          {deleteAction}
        </div>
      </header>
      <div id={panelId} hidden={!open}>
        {children}
      </div>
    </article>
  );
}
