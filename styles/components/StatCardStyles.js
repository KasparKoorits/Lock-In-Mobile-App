import { StyleSheet } from "react-native";
import { colors, radius, font, spacing } from "../theme";

export default StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: radius.xl,
    padding: spacing.lg,
    alignItems: "center",
    minWidth: 80,
  },
  icon: {
    fontSize: 18,
    marginBottom: 4,
    color: colors.textMuted,
  },
  value: {
    color: colors.text,
    fontSize: font.xxl,
    fontWeight: "700",
    marginBottom: 2,
  },
  label: {
    color: colors.textDim,
    fontSize: font.xs,
    textAlign: "center",
  },
});