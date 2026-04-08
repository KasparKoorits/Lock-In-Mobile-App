import React, { useState } from "react";
import { StatusBar, View, Text } from "react-native";

export default function App() {
  const [screen, setScreen] = useState("home");

  const navigate = (s) => setScreen(s);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
      <View style={{ flex: 1, backgroundColor: "#0a0a0a", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#ffffff", fontSize: 20 }}>Lock In</Text>
        <Text style={{ color: "#777777", fontSize: 13, marginTop: 4 }}>Focus Assistant</Text>
      </View>
    </>
  );
}