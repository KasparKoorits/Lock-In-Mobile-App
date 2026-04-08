import { StyleSheet } from "react-native";
import { colors, radius, font, spacing } from "../theme";

export default StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    marginBottom: spacing.lg,
  },
  title: {
    color: colors.text,
    fontSize: font.lg,
    fontWeight: "700",
    marginBottom: spacing.md,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  itemLast: {
    borderBottomWidth: 0,
  },
  num: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    backgroundColor: colors.surfaceAlt,
    alignItems: "center",
    justifyContent: "center",
  },
  numText: {
    color: colors.textMuted,
    fontSize: font.sm,
    fontWeight: "700",
  },
  type: {
    color: colors.text,
    fontSize: font.md,
    fontWeight: "600",
  },
  time: {
    color: colors.textDim,
    fontSize: font.sm,
    marginTop: 2,
  },
});