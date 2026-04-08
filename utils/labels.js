// Return label text for focus rate.
export function focusRateLabel(rate) {
  if (rate >= 90) return "Excellent!";
  if (rate >= 60) return "Good job!";
  return "Keep practicing!";
}