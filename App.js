import React, { useState } from "react";
import { StatusBar } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import NewTaskScreen from "./screens/NewTaskScreen";
import SessionScreen from "./screens/SessionScreen";
import SummaryScreen from "./screens/SummaryScreen";
import StatsScreen from "./screens/StatsScreen";
import useSessionStore from "./hooks/useSessionStore";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentTask, setCurrentTask] = useState(null);
  const [lastResult, setLastResult] = useState(null);
  const { sessions, todayStats, recordSession } = useSessionStore();

  const navigate = (s) => setScreen(s);

  const handleStart = (task) => {
    setCurrentTask(task);
    setScreen("session");
  };

  const handleEnd = (result) => {
    setLastResult(result);
    recordSession(currentTask, result);
    setScreen("summary");
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0a" />
      {screen === "home" && (
        <HomeScreen navigate={navigate} todayStats={todayStats} />
      )}
      {screen === "newTask" && (
        <NewTaskScreen navigate={navigate} onStart={handleStart} />
      )}
      {screen === "session" && currentTask && (
        <SessionScreen
          navigate={navigate}
          task={currentTask}
          onEnd={handleEnd}
        />
      )}
      {screen === "summary" && currentTask && lastResult && (
        <SummaryScreen
          navigate={navigate}
          task={currentTask}
          result={lastResult}
        />
      )}
      {screen === "stats" && (
        <StatsScreen navigate={navigate} sessions={sessions} />
      )}
    </>
  );
}