import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { interruptionIcon } from "../utils/icons";
import { colors, radius, font, spacing } from "../styles/theme";

export default function InterruptionList({ interruptions }) {
  if (!interruptions || interruptions.length === 0) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Interruption History</Text>
      {interruptions.map((item, i) => (
        <View
          key={i}
          style={[
            styles.item,
            i === interruptions.length - 1 && styles.itemLast,
          ]}
        >
          <View style={styles.num}>
            <Text style={styles.numText}>{i + 1}</Text>
          </View>
          <View>
            <Text style={styles.type}>
              {interruptionIcon(item.type)} {item.type}
            </Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      ))}
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