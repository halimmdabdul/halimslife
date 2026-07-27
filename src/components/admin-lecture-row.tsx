"use client";

import { useId, useState, type ReactNode } from "react";

export function AdminLectureRow({
  children,
  deleteAction,
  icon,
  meta,
  title,
  type,
}: {
  children: ReactNode;
  deleteAction: ReactNode;
  icon: string;
  meta: string;
  title: string;
  type: "video" | "reading" | "quiz";
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className={`admin-lecture-editor${open ? " is-open" : ""}`}>
      <header className="admin-lecture-row-header">
        <span className={`admin-lecture-type ${type}`} aria-hidden="true">{icon}</span>
        <div>
          <strong>{title}</strong>
          <small>{meta}</small>
        </div>
        <div className="admin-lecture-row-actions">
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
