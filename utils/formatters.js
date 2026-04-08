/**
 * Format a Date into a readable session timestamp.
 * e.g. "Mar 16, 09:28 AM"
 */
export function formatSessionDate(date) {
  const datePart = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const timePart = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${datePart}, ${timePart}`;
}

/**
 * Format a timestamp for interruption logs.
 * e.g. "09:28:37 AM"
 */
export function formatInterruptionTime(date) {
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

/**
 * Format total minutes as "Xh" or "Xm".
 */
export function formatTotalTime(minutes) {
  if (minutes >= 60) return `${Math.round(minutes / 60)}h`;
  return `${minutes}m`;
}