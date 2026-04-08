import { StyleSheet } from "react-native";
import { colors, radius, font, spacing } from "../theme";

export default StyleSheet.create({
  backBtn: {
    width: 34,
    height: 34,
    borderRadius: radius.full,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  backBtnText: {
    color: colors.text,
    fontSize: font.xl,
  },
  bigRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  bigCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xl,
    alignItems: "center",
  },
  bigIcon: {
    fontSize: 22,
    marginBottom: 6,
  },
  bigVal: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 3,
  },
  bigLbl: {
    color: colors.textDim,
    fontSize: font.sm,
    textAlign: "center",
  },
  midRow: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  midCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    alignItems: "center",
  },
  midIcon: {
    color: colors.primary,
    fontSize: font.xl,
    marginBottom: 4,
  },
  midVal: {
    color: colors.text,
    fontSize: font.xxl,
    fontWeight: "700",
    marginBottom: 2,
  },
  midLbl: {
    color: colors.textDim,
    fontSize: font.sm,
    textAlign: "center",
  },
  recentTitle: {
    color: colors.text,
    fontSize: font.lg,
    fontWeight: "700",
    marginBottom: spacing.md,
  },
  emptyCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.xxl,
    alignItems: "center",
    gap: spacing.sm,
  },
  emptyIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: font.xl,
    fontWeight: "700",
  },
  emptySub: {
    color: colors.textMuted,
    fontSize: font.md,
    textAlign: "center",
    marginBottom: spacing.md,
  },
  sessCard: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.sm,
  },
  sessTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  sessName: {
    color: colors.text,
    fontSize: font.md,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  sessDur: {
    color: colors.primary,
    fontSize: font.md,
    fontWeight: "700",
  },
  sessBot: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sessDate: {
    color: colors.textDim,
    fontSize: font.sm,
  },
  sessInts: {
    color: colors.textDim,
    fontSize: font.sm,
  },
  badge: {
    marginTop: 8,
    backgroundColor: colors.dangerBg,
    borderRadius: radius.sm,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: "flex-start",
  },
  badgeText: {
    color: colors.danger,
    fontSize: font.xs,
    fontWeight: "600",
  },
});