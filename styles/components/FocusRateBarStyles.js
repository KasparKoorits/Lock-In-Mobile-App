import { StyleSheet } from "react-native";
import { colors, radius, font, spacing } from "../theme";

export default StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    marginBottom: spacing.lg,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.sm,
  },
  label: {
    color: colors.textMuted,
    fontSize: font.base,
  },
  pct: {
    color: colors.text,
    fontSize: font.base,
    fontWeight: "700",
  },
  trackBg: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: radius.full,
    overflow: "hidden",
    marginBottom: spacing.sm,
  },
  trackFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: radius.full,
  },
  desc: {
    color: colors.textDim,
    fontSize: font.sm,
    textAlign: "right",
  },
});