import { deadlineStatus } from "@/lib/deadline";

export function DeadlineBadge({ deadline }: { deadline?: string }) {
  const status = deadlineStatus(deadline);
  return <span className={`deadline-badge deadline-badge--${status.urgency}`}>{status.label}</span>;
}
