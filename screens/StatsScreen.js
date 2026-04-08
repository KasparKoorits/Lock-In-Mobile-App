import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import common from "../styles/common";
import styles from "../styles/screens/StatsScreenStyles";
import { formatTotalTime } from "../utils/formatters";

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