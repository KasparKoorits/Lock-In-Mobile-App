import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import common from "../styles/common";
import { colors, radius, font, spacing } from "../styles/theme";
import FocusRateBar from "../components/FocusRateBar";
import InterruptionList from "../components/InterruptionList";
import { calcFocusRate } from "../utils/metrics";

function getOutcome(completed, interruptions) {
  const ic = interruptions.length;
  if (!completed) {
    return {
      icon: "✕",
      iconBg: colors.dangerBg,
      iconColor: colors.danger,
      title: "Session ended",
      sub: "No worries! Every start is difficult. Try again next time!",
    };
  }
  if (ic === 0) {
    return {
      title: "Perfect session!",
      sub: "Amazing! You managed to focus without any interruptions.",
    };
  }
  return {
    icon: "✓",
    iconBg: colors.successBg,
    iconColor: colors.success,
    title: "Well done!",
    sub: "You completed the whole session. Try to reduce interruptions next time.",
  };
}

export default function SummaryScreen({ navigate, task, result }) {
  const { completed, interruptions } = result;
  const rate = calcFocusRate({
    completed,
    interruptions,
    duration: task.duration,
  });
  const outcome = getOutcome(completed, interruptions);
  const focusMin = completed ? task.duration : Math.max(1, task.duration - 1);

  return (
    <SafeAreaView style={common.safe}>
      <ScrollView contentContainerStyle={common.container}>
        {/* Outcome icon */}
        <View style={[styles.sumIcon, { backgroundColor: outcome.iconBg }]}>
          <Text style={[styles.sumIconText, { color: outcome.iconColor }]}>
            {outcome.icon}
          </Text>
        </View>
        <Text style={styles.sumTitle}>{outcome.title}</Text>
        <Text style={styles.sumSub}>{outcome.sub}</Text>

        {/* Task banner */}
        <View style={styles.taskBanner}>
          <Text style={styles.tbLbl}>Task</Text>
          <Text style={styles.tbVal}>{task.name.toUpperCase()}</Text>
        </View>

        {/* Stats */}
        <View style={styles.sumStats}>
          <View style={styles.sStat}>
            <Text style={styles.sIcon}>◷</Text>
            <Text style={styles.sVal}>{focusMin}m</Text>
            <Text style={styles.sLbl}>Focus Time</Text>
          </View>
          <View style={styles.sStat}>
            <Text style={styles.sIcon}>⚡</Text>
            <Text style={styles.sVal}>{interruptions.length}</Text>
            <Text style={styles.sLbl}>Interruptions</Text>
          </View>
        </View>

        <FocusRateBar rate={rate} />
        <InterruptionList interruptions={interruptions} />

        <TouchableOpacity
          style={common.btnRed}
          onPress={() => navigate("home")}
        >
          <Text style={common.btnRedText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[common.btnOutline, styles.statsButton]}
          onPress={() => navigate("stats")}
        >
          <Text style={common.btnOutlineText}>View Statistics</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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