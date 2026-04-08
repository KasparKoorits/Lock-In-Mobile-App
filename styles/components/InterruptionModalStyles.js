import { StyleSheet } from "react-native";
import { colors, radius, font, spacing } from "../theme";

export default StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  sheet: {
    backgroundColor: colors.surfaceDark,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: spacing.xxl,
    paddingBottom: 36,
    gap: spacing.sm,
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: colors.borderLight,
    borderRadius: radius.full,
    alignSelf: "center",
    marginBottom: spacing.lg,
  },
  title: {
    color: colors.text,
    fontSize: font.xxl,
    fontWeight: "700",
    marginBottom: 4,
  },
  sub: {
    color: colors.textMuted,
    fontSize: font.md,
    marginBottom: spacing.md,
  },
  optionBtn: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 14,
    alignItems: "center",
  },
  optionText: {
    color: colors.text,
    fontSize: font.lg,
    fontWeight: "600",
  },
});