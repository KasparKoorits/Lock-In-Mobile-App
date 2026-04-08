import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/components/FocusRateBarStyles";
import { focusRateLabel } from "../utils/labels";

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