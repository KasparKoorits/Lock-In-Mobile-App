import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import common from "../styles/common";
import styles from "../styles/screens/SessionScreenStyles";
import useTimer from "../hooks/useTimer";
import InterruptionModal from "../components/InterruptionModal";
import { formatInterruptionTime } from "../utils/formatters";

export default function SessionScreen({ task, onEnd }) {
  const { display, timeLeft, paused, finished, toggle, pause, stop } = useTimer(
    task.duration * 60,
  );
  const [interruptions, setInterruptions] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (finished) {
      onEnd({ completed: true, interruptions });
    }
  }, [finished]);

  const handleInterruptionSelect = (type) => {
    const time = formatInterruptionTime(new Date());
    setInterruptions((prev) => [...prev, { type, time }]);
    setModalVisible(false);
    if (paused) toggle();
  };

  const handleInterruptionOpen = () => {
    pause();
    setModalVisible(true);
  };

  const handleEnd = () => {
    stop();
    onEnd({ completed: false, interruptions });
  };

  const remainingMin = Math.ceil(timeLeft / 60);

  return (
    <SafeAreaView style={common.safe}>
      <ScrollView contentContainerStyle={common.container}>
        <View style={styles.header}>
          <Text style={styles.title}>SESSION</Text>
          <Text style={styles.sub}>Focus mode active</Text>
        </View>

        <View style={styles.timerWrap}>
          <View style={styles.timerRing}>
            <Text style={styles.timerDigits}>{display}</Text>
            <Text style={styles.timerInt}>{interruptions.length} interruption(s)</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.btnRow}>
          <TouchableOpacity style={styles.btnDark} onPress={toggle}>
            <Text style={styles.btnDarkText}>{paused ? "▶ Resume" : "⏸ Pause"}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnIntOutline} onPress={handleInterruptionOpen}>
            <Text style={styles.btnIntText}>⚠ Interruption</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={common.btnRed} onPress={handleEnd}>
          <Text style={common.btnRedText}>⏹ End Session</Text>
        </TouchableOpacity>

        <View style={styles.timeCard}>
          <View>
            <Text style={styles.tcLbl}>Planned time</Text>
            <Text style={styles.tcVal}>{task.duration} min</Text>
          </View>
          <View style={styles.endAligned}>
            <Text style={styles.tcLbl}>Time remaining</Text>
            <Text style={styles.tcVal}>{remainingMin} min</Text>
          </View>
        </View>
      </ScrollView>

      <InterruptionModal
        visible={modalVisible}
        onSelect={handleInterruptionSelect}
        onCancel={() => {
          setModalVisible(false);
          if (paused) toggle();
        }}
      />
    </SafeAreaView>
  );
}