import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import common from "../styles/common";

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
            <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#e02020', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>⊙</Text>
            </View>
            <View>
              <Text style={common.headerTitle}>Lock In</Text>
              <Text style={common.headerSub}>Focus Assistant</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigate("stats")}>
            <Text style={{ color: '#ffffff', fontSize: 22 }}>▦</Text>
          </TouchableOpacity>
        </View>

        {/* Today's Progress — plain text stub, StatCard added next commit */}
        <Text style={common.sectionLabel}>Today's Progress</Text>
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <View style={{ flex: 1, backgroundColor: '#141820', borderRadius: 11, padding: 14, alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>{todayStats?.sessions ?? 0}</Text>
            <Text style={{ color: '#777', fontSize: 11, marginTop: 2 }}>Sessions</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#141820', borderRadius: 11, padding: 14, alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>{todayStats?.time ?? 0}m</Text>
            <Text style={{ color: '#777', fontSize: 11, marginTop: 2 }}>Focus Time</Text>
          </View>
          <View style={{ flex: 1, backgroundColor: '#141820', borderRadius: 11, padding: 14, alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>{todayStats?.interruptions ?? 0}</Text>
            <Text style={{ color: '#777', fontSize: 11, marginTop: 2 }}>Interruptions</Text>
          </View>
        </View>

        {/* CTA */}
        <View style={{ backgroundColor: '#e02020', borderRadius: 16, padding: 20, marginBottom: 16 }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '700', marginBottom: 4 }}>Start Focus Session</Text>
          <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, marginBottom: 14 }}>
            Create a new task and start focusing
          </Text>
          <TouchableOpacity
            style={{ backgroundColor: '#fff', borderRadius: 11, padding: 12, alignItems: 'center' }}
            onPress={() => navigate("newTask")}
          >
            <Text style={{ color: '#e02020', fontSize: 14, fontWeight: '600' }}>+ Create Task</Text>
          </TouchableOpacity>
        </View>

        {/* Tips */}
        <View style={{ backgroundColor: '#141820', borderRadius: 13, padding: 16 }}>
          <Text style={{ color: '#fff', fontSize: 14, fontWeight: '600', marginBottom: 12 }}>💡 Tips</Text>
          {TIPS.map((tip, i) => (
            <View key={i} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 8 }}>
              <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: '#e02020', marginTop: 5, marginRight: 10 }} />
              <Text style={{ color: '#aaaaaa', fontSize: 13, flex: 1 }}>{tip}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}