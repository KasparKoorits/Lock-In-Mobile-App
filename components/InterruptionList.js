import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/components/InterruptionListStyles";
import { interruptionIcon } from "../utils/icons";

export default function InterruptionList({ interruptions }) {
  if (!interruptions || interruptions.length === 0) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Interruption History</Text>
      {interruptions.map((item, i) => (
        <View
          key={i}
          style={[
            styles.item,
            i === interruptions.length - 1 && styles.itemLast,
          ]}
        >
          <View style={styles.num}>
            <Text style={styles.numText}>{i + 1}</Text>
          </View>
          <View>
            <Text style={styles.type}>
              {interruptionIcon(item.type)} {item.type}
            </Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}