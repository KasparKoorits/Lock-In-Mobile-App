
// Calculate focus rate (0-100) for a completed or incomplete session.
export function calcFocusRate({ completed, interruptions, duration }) {
  const interruptionCount = interruptions.length;
  if (!completed) {
    return Math.max(
      4,
      Math.round(((duration * 60 - 1) / (duration * 60)) * 100),
    );
  }
  if (interruptionCount === 0) return 100;
  return Math.max(
    10,
    Math.round((1 - interruptionCount / (duration * 2)) * 100),
  );
}