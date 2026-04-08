import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";

const TYPES = [
  { label: "Break", icon: "☕" },
  { label: "Distraction", icon: "⚠️" },
  { label: "Phone", icon: "📱" },
  { label: "Other", icon: "💬" },
];

const styles = {
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 36,
  },
  handle: {
    width: 36,
    height: 4,
    backgroundColor: '#444444',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  sub: {
    color: '#777777',
    fontSize: 13,
    marginBottom: 20,
  },
  optionBtn: {
    backgroundColor: '#252525',
    borderRadius: 13,
    padding: 16,
    marginBottom: 10,
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
  },
  cancelBtn: {
    backgroundColor: '#1e1e1e',
    borderWidth: 1.5,
    borderColor: '#3a3a3a',
    borderRadius: 13,
    padding: 13,
    alignItems: 'center',
    marginTop: 4,
  },
  cancelText: {
    color: '#ffffff',
    fontSize: 14,
  },
};

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
          <TouchableOpacity style={styles.cancelBtn} onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}