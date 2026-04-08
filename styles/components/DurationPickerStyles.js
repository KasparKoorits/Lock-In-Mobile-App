import { StyleSheet } from "react-native";
import { colors, radius, font, spacing } from "../theme";

export default StyleSheet.create({
  pillRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.md,
    flexWrap: "wrap",
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
  pillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  pillText: {
    color: colors.textMuted,
    fontSize: font.md,
    fontWeight: "600",
  },
  pillTextActive: {
    color: colors.text,
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: 12,
    color: colors.text,
    fontSize: font.md,
    marginBottom: 14,
    textAlign: "center",
  },
});