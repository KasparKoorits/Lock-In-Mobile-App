import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles/components/DurationPickerStyles";

const PRESETS = [15, 25, 30, 45, 60];

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