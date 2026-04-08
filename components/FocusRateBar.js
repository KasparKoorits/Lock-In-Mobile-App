import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { focusRateLabel } from "../utils/labels";
import { colors, radius, font, spacing } from "../styles/theme";

export default function FocusRateBar({ rate }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Focus Rate</Text>
        <Text style={styles.pct}>{rate}%</Text>
      </View>
      <View style={styles.trackBg}>
        <View style={[styles.trackFill, { width: `${rate}%` }]} />
      </View>
      <Text style={styles.desc}>{focusRateLabel(rate)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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