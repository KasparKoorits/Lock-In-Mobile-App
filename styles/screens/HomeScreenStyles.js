import { StyleSheet } from "react-native";
import { colors, radius, font, spacing } from "../theme";

export default StyleSheet.create({
  logo: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: colors.text,
    fontSize: font.xl,
    fontWeight: "700",
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBtnText: {
    color: colors.textMuted,
    fontSize: font.lg,
  },
  statsRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  ctaCard: {
    backgroundColor: colors.primary,
    borderRadius: radius.xxl,
    padding: spacing.xxl,
    marginBottom: spacing.lg,
    gap: spacing.sm,
  },
  ctaTitle: {
    color: colors.text,
    fontSize: font.xxl,
    fontWeight: "700",
  },
  ctaSub: {
    color: "rgba(255,255,255,0.75)",
    fontSize: font.md,
    marginBottom: spacing.sm,
  },
  tipsCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xxl,
    padding: spacing.xl,
    gap: spacing.sm,
  },
  tipsTitle: {
    color: colors.text,
    fontSize: font.lg,
    fontWeight: "700",
    marginBottom: spacing.xs,
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  tipDot: {
    width: 6,
    height: 6,
    borderRadius: radius.full,
    backgroundColor: colors.primary,
  },
  tipText: {
    color: colors.textMuted,
    fontSize: font.md,
    flex: 1,
    lineHeight: 20,
  },
});