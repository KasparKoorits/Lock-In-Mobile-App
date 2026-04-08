import React from "react";
import { View, Text } from "react-native";

const styles = {
  card: {
    flex: 1,
    backgroundColor: '#141820',
    borderRadius: 11,
    padding: 14,
    alignItems: 'center',
  },
  icon: {
    color: '#e02020',
    fontSize: 18,
    marginBottom: 6,
  },
  value: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
  },
  label: {
    color: '#777777',
    fontSize: 10,
    textAlign: 'center',
  },
};

export default function StatCard({ icon, value, label }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}