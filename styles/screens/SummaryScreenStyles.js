import { StyleSheet } from "react-native";
import { colors, radius, font, spacing } from "../theme";

export default StyleSheet.create({
  sumIcon: {
    width: 72,
    height: 72,
    borderRadius: radius.full,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: spacing.lg,
    marginTop: spacing.md,
  },
  sumIconText: {
    fontSize: 28,
    fontWeight: "700",
  },
  sumTitle: {
    color: colors.text,
    fontSize: font.xxl,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: spacing.sm,
  },
  sumSub: {
    color: colors.textMuted,
    fontSize: font.md,
    textAlign: "center",
    marginBottom: spacing.xl,
    lineHeight: 20,
  },
  taskBanner: {
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  tbLbl: {
    color: colors.textDim,
    fontSize: font.sm,
    marginBottom: 3,
  },
  tbVal: {
    color: colors.text,
    fontSize: font.xl,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  sumStats: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.lg,
  },
  sStat: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    alignItems: "center",
  },
  sIcon: {
    fontSize: 20,
    marginBottom: 5,
  },
  sVal: {
    color: colors.text,
    fontSize: font.xxl,
    fontWeight: "700",
    marginBottom: 3,
  },
  sLbl: {
    color: colors.textDim,
    fontSize: font.sm,
  },
  statsButton: {
    marginTop: spacing.xs,
  },
});