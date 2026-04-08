import { StyleSheet } from "react-native";
import { colors, radius, font, spacing } from "../theme";

export default StyleSheet.create({
  header: {
    alignItems: "center",
    marginBottom: spacing.xl,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: font.base,
    fontWeight: "700",
    letterSpacing: 3,
  },
  sub: {
    color: colors.textDim,
    fontSize: font.sm,
    marginTop: 2,
  },
  timerWrap: {
    alignItems: "center",
    marginBottom: spacing.xl,
  },
  timerRing: {
    width: 220,
    height: 220,
    borderRadius: radius.full,
    backgroundColor: colors.timerBg,
    borderWidth: 3,
    borderColor: colors.timerBorder,
    alignItems: "center",
    justifyContent: "center",
  },
  timerDigits: {
    color: colors.text,
    fontSize: font.timer,
    fontWeight: "200",
    letterSpacing: 2,
    fontVariant: ["tabular-nums"],
  },
  timerInt: {
    color: colors.textDim,
    fontSize: font.sm,
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginBottom: spacing.xl,
  },
  btnRow: {
    flexDirection: "row",
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
  btnDark: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: 13,
    alignItems: "center",
  },
  btnDarkText: {
    color: colors.text,
    fontSize: font.lg,
    fontWeight: "600",
  },
  btnIntOutline: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: radius.lg,
    padding: 13,
    alignItems: "center",
  },
  btnIntText: {
    color: colors.primary,
    fontSize: font.lg,
    fontWeight: "600",
  },
  timeCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginTop: spacing.md,
  },
  endAligned: {
    alignItems: "flex-end",
  },
  tcLbl: {
    color: colors.textDim,
    fontSize: font.sm,
    marginBottom: 3,
  },
  tcVal: {
    color: colors.text,
    fontSize: font.lg,
    fontWeight: "700",
  },
});