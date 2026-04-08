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
  inputError: {
    borderWidth: 1.5,
    borderColor: colors.danger,
  },
  tipBox: {
    backgroundColor: colors.surfaceAlt,
    borderRadius: radius.md,
    padding: spacing.lg,
    marginBottom: spacing.xl,
  },
  tipText: {
    color: colors.textMuted,
    fontSize: font.md,
    lineHeight: 20,
  },
  tipBold: {
    color: colors.text,
    fontWeight: "700",
  },
});