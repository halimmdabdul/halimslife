export type DeadlineUrgency = "unknown" | "passed" | "urgent" | "soon" | "normal";

export type DeadlineStatus = {
  label: string;
  urgency: DeadlineUrgency;
};

const msPerDay = 86_400_000;

export function deadlineStatus(deadlineIso?: string): DeadlineStatus {
  if (!deadlineIso) {
    return { label: "অফিসিয়াল পেজে deadline verify করুন", urgency: "unknown" };
  }
  const deadline = new Date(deadlineIso);
  if (Number.isNaN(deadline.getTime())) {
    return { label: "অফিসিয়াল পেজে deadline verify করুন", urgency: "unknown" };
  }

  const daysLeft = Math.ceil((deadline.getTime() - Date.now()) / msPerDay);
  if (daysLeft < 0) return { label: "Deadline পার হয়ে গেছে — পরবর্তী intake দেখুন", urgency: "passed" };
  if (daysLeft === 0) return { label: "আজই শেষ দিন", urgency: "urgent" };
  if (daysLeft <= 14) return { label: `মাত্র ${daysLeft} দিন বাকি`, urgency: "urgent" };
  if (daysLeft <= 45) return { label: `${daysLeft} দিন বাকি`, urgency: "soon" };
  return { label: `${daysLeft} দিন বাকি`, urgency: "normal" };
}
