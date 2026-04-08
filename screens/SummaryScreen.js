import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import common from "../styles/common";
import styles from "../styles/screens/SummaryScreenStyles";
import { colors } from "../styles/theme";
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