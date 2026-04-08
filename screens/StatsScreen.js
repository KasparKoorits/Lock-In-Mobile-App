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
import { formatTotalTime } from "../utils/formatters";
import { colors, radius, font, spacing } from "../styles/theme";

export default function StatsScreen({ navigate, sessions }) {
  const totalMin = sessions.reduce((a, s) => a + s.duration, 0);
  const totalInt = sessions.reduce((a, s) => a + s.interruptions, 0);
  const streak = sessions.length > 0 ? 1 : 0;

  return (
    <SafeAreaView style={common.safe}>
      <ScrollView contentContainerStyle={common.container}>
        <View style={common.backHeader}>
          <TouchableOpacity
            onPress={() => navigate("home")}
            style={styles.backBtn}
          >
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={common.screenTitle}>Statistics</Text>
        </View>

        {/* Big stat cards */}
        <View style={styles.bigRow}>
          <View style={styles.bigCard}>
            <Text style={styles.bigIcon}>◎</Text>
            <Text style={styles.bigVal}>{sessions.length}</Text>
            <Text style={styles.bigLbl}>Total Sessions</Text>
          </View>
          <View style={styles.bigCard}>
            <Text style={styles.bigIcon}>◷</Text>
            <Text style={styles.bigVal}>{formatTotalTime(totalMin)}</Text>
            <Text style={styles.bigLbl}>Total Focus Time</Text>
          </View>
        </View>

        {/* Mid stat cards */}
        <View style={styles.midRow}>
          <View style={styles.midCard}>
            <Text style={styles.midIcon}>↗</Text>
            <Text style={styles.midVal}>{streak}</Text>
            <Text style={styles.midLbl}>Day Streak 🔥</Text>
          </View>
          <View style={styles.midCard}>
            <Text style={styles.midIcon}>⚡</Text>
            <Text style={styles.midVal}>{totalInt}</Text>
            <Text style={styles.midLbl}>Total Interruptions</Text>
          </View>
        </View>

        {/* Recent sessions */}
        <Text style={styles.recentTitle}>Recent Sessions</Text>

        {sessions.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyIcon}>↗</Text>
            <Text style={styles.emptyTitle}>No Statistics</Text>
            <Text style={styles.emptySub}>
              Start your first focus session to see statistics!
            </Text>
            <TouchableOpacity
              style={common.btnRed}
              onPress={() => navigate("newTask")}
            >
              <Text style={common.btnRedText}>Create First Task</Text>
            </TouchableOpacity>
          </View>
        ) : (
          sessions.slice(0, 5).map((s, i) => (
            <View key={i} style={styles.sessCard}>
              <View style={styles.sessTop}>
                <Text style={styles.sessName}>{s.name.toUpperCase()}</Text>
                <Text style={styles.sessDur}>{s.duration}m</Text>
              </View>
              <View style={styles.sessBot}>
                <Text style={styles.sessDate}>{s.date}</Text>
                <Text style={styles.sessInts}>
                  {s.interruptions} interruption(s)
                </Text>
              </View>
              {!s.completed && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>⚠ Incomplete</Text>
                </View>
              )}
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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