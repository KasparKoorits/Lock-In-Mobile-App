import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import common from "../styles/common";
import styles from "../styles/screens/NewTaskScreenStyles";
import { colors } from "../styles/theme";
import DurationPicker from "../components/DurationPicker";

export default function NewTaskScreen({ navigate, onStart }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [duration, setDuration] = useState(25);
  const [nameError, setNameError] = useState(false);

  const handleStart = () => {
    if (!name.trim()) {
      setNameError(true);
      return;
    }
    onStart({ name: name.trim(), desc, duration });
  };

  return (
    <SafeAreaView style={common.safe}>
      <ScrollView contentContainerStyle={common.container}>
        <View style={common.backHeader}>
          <TouchableOpacity onPress={() => navigate("home")} style={styles.backBtn}>
            <Text style={styles.backBtnText}>←</Text>
          </TouchableOpacity>
          <Text style={common.screenTitle}>New Task</Text>
        </View>

        <Text style={common.fieldLabel}>Task Name *</Text>
        <TextInput
          style={[common.input, nameError && styles.inputError]}
          placeholder="e.g. Math homework"
          placeholderTextColor={colors.textPlaceholder}
          value={name}
          onChangeText={(v) => { setName(v); setNameError(false); }}
        />

        <Text style={common.fieldLabel}>Description (optional)</Text>
        <TextInput
          style={[common.input, common.inputMultiline]}
          placeholder="Add additional details..."
          placeholderTextColor={colors.textPlaceholder}
          value={desc}
          onChangeText={setDesc}
          multiline
          numberOfLines={3}
        />

        <Text style={common.fieldLabel}>⏱ Duration (minutes)</Text>
        <DurationPicker value={duration} onChange={setDuration} />

        <View style={styles.tipBox}>
          <Text style={styles.tipText}>
            <Text style={styles.tipBold}>Tip: </Text>
            25-minute sessions (Pomodoro method) are most effective for focus
            and help avoid fatigue.
          </Text>
        </View>

        <TouchableOpacity style={common.btnRed} onPress={handleStart}>
          <Text style={common.btnRedText}>Start Session</Text>
        </TouchableOpacity>
        <TouchableOpacity style={common.btnOutline} onPress={() => navigate("home")}>
          <Text style={common.btnOutlineText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}