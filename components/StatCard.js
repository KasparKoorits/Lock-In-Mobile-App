import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/components/StatCardStyles";

export default function StatCard({ icon, value, label }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}