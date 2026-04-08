import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import common from "../styles/common";
import styles from "../styles/screens/HomeScreenStyles";
import StatCard from "../components/StatCard";

const TIPS = [
  "Turn phone to airplane mode or silent",
  "Tell friends you need quiet time",
  "Choose a quiet workspace without distractions",
  "Take a short break after each session",
];

export default function HomeScreen({ navigate, todayStats }) {
  return (
    <SafeAreaView style={common.safe}>
      <ScrollView contentContainerStyle={common.container}>
        {/* Header */}
        <View style={common.header}>
          <View style={common.headerLeft}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>⊙</Text>
            </View>
            <View>
              <Text style={common.headerTitle}>Lock In</Text>
              <Text style={common.headerSub}>Focus Assistant</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.iconBtn} onPress={() => navigate("stats")}>
            <Text style={styles.iconBtnText}>Statistics</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Progress */}
        <Text style={common.sectionLabel}>Today's Progress</Text>
        <View style={styles.statsRow}>
          <StatCard icon="◎" value={todayStats?.sessions ?? 0} label="Sessions" />
          <StatCard icon="◷" value={`${todayStats?.time ?? 0}m`} label="Focus Time" />
          <StatCard icon="⚡" value={todayStats?.interruptions ?? 0} label="Interruptions" />
        </View>

        {/* CTA */}
        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Start Focus Session</Text>
          <Text style={styles.ctaSub}>
            Create a new task and start focusing
          </Text>
          <TouchableOpacity
            style={common.btnWhite}
            onPress={() => navigate("newTask")}
          >
            <Text style={common.btnWhiteText}>+ Create Task</Text>
          </TouchableOpacity>
        </View>

        {/* Tips */}
        <View style={styles.tipsCard}>
          <Text style={styles.tipsTitle}>💡 Tips</Text>
          {TIPS.map((tip, i) => (
            <View key={i} style={styles.tipItem}>
              <View style={styles.tipDot} />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}