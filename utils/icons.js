// Return icon emoji for interruption type.
export function interruptionIcon(type) {
  switch (type) {
    case "Break":
      return "☕";
    case "Phone":
      return "📱";
    case "Distraction":
      return "⚠️";
    default:
      return "💬";
  }
}