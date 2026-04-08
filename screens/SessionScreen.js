import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import common from "../styles/common";
import useTimer from "../hooks/useTimer";
import InterruptionModal from "../components/InterruptionModal";
import { formatInterruptionTime } from "../utils/formatters";

const styles = {
  header: { alignItems: 'center', marginBottom: 24, paddingTop: 8 },
  title: { color: '#ffffff', fontSize: 13, fontWeight: '700', letterSpacing: 2 },
  sub: { color: '#777777', fontSize: 11, marginTop: 3 },
  timerWrap: { alignItems: 'center', marginVertical: 28 },
  timerRing: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#150f15',
    borderWidth: 2,
    borderColor: '#2a1a2a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerDigits: { color: '#ffffff', fontSize: 46, fontWeight: '700', fontVariant: ['tabular-nums'] },
  timerInt: { color: '#777777', fontSize: 11, marginTop: 4 },
  divider: { height: 1, backgroundColor: '#252b38', marginVertical: 20 },
  btnRow: { flexDirection: 'row', gap: 10, marginBottom: 12 },
  btnDark: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    borderRadius: 13,
    padding: 13,
    alignItems: 'center',
  },
  btnDarkText: { color: '#ffffff', fontSize: 14 },
  btnIntOutline: {
    flex: 1,
    backgroundColor: '#1e1e1e',
    borderWidth: 1.5,
    borderColor: '#e02020',
    borderRadius: 13,
    padding: 13,
    alignItems: 'center',
  },
  btnIntText: { color: '#e02020', fontSize: 14 },
  timeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#141820',
    borderRadius: 13,
    padding: 16,
    marginTop: 12,
  },
  tcLbl: { color: '#777777', fontSize: 11, marginBottom: 4 },
  tcVal: { color: '#ffffff', fontSize: 16, fontWeight: '700' },
  endAligned: { alignItems: 'flex-end' },
};

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