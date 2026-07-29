"use client";

export function CvPrintButton() {
  return (
    <button className="cv-print-button" type="button" onClick={() => window.print()}>
      Save as PDF <span aria-hidden="true">↓</span>
    </button>
  );
}
