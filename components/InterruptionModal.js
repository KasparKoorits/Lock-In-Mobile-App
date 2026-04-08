import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "../styles/components/InterruptionModalStyles";
import common from "../styles/common";

const TYPES = [
  { label: "Break", icon: "☕" },
  { label: "Distraction", icon: "⚠️" },
  { label: "Phone", icon: "📱" },
  { label: "Other", icon: "💬" },
];

export default function InterruptionModal({ visible, onSelect, onCancel }) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <Text style={styles.title}>Log Interruption</Text>
          <Text style={styles.sub}>What caused the interruption?</Text>
          {TYPES.map(({ label, icon }) => (
            <TouchableOpacity
              key={label}
              style={styles.optionBtn}
              onPress={() => onSelect(label)}
            >
              <Text style={styles.optionText}>{icon} {label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={common.btnOutline} onPress={onCancel}>
            <Text style={common.btnOutlineText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}