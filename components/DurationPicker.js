import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

const PRESETS = [15, 25, 30, 45, 60];

const styles = {
  pillRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  pill: {
    flex: 1,
    backgroundColor: '#141820',
    borderRadius: 9,
    paddingVertical: 10,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#252b38',
  },
  pillActive: {
    backgroundColor: '#e02020',
    borderColor: '#e02020',
  },
  pillText: {
    color: '#777777',
    fontSize: 13,
    fontWeight: '600',
  },
  pillTextActive: {
    color: '#ffffff',
  },
  input: {
    backgroundColor: '#141820',
    borderRadius: 11,
    padding: 12,
    color: '#ffffff',
    fontSize: 13,
    marginBottom: 14,
    textAlign: 'center',
  },
};

export default function DurationPicker({ value, onChange }) {
  return (
    <View>
      <View style={styles.pillRow}>
        {PRESETS.map((d) => (
          <TouchableOpacity
            key={d}
            style={[styles.pill, value === d && styles.pillActive]}
            onPress={() => onChange(d)}
          >
            <Text style={[styles.pillText, value === d && styles.pillTextActive]}>
              {d}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(value)}
        onChangeText={(v) => onChange(parseInt(v) || 25)}
      />
    </View>
  );
}