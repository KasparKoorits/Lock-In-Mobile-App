import React, { useState } from "react";
import { StatusBar } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import NewTaskScreen from "./screens/NewTaskScreen";
import SessionScreen from "./screens/SessionScreen";
import SummaryScreen from "./screens/SummaryScreen";
import StatsScreen from "./screens/StatsScreen";
import { formatSessionDate } from "./utils/formatters";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [currentTask, setCurrentTask] = useState(null);
  const [lastResult, setLastResult] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [todayStats, setTodayStats] = useState({
    sessions: 0,
    time: 0,
    interruptions: 0,
  });

  const navigate = (s) => setScreen(s);

  const handleStart = (task) => {
    setCurrentTask(task);
    setScreen("session");
  };

  const handleEnd = (result) => {
    setLastResult(result);
    const ic = result.interruptions.length;
    const dur = currentTask.duration;
    const dateStr = formatSessionDate(new Date());

    setSessions((prev) => [
      {
        name: currentTask.name,
        date: dateStr,
        duration: dur,
        interruptions: ic,
        completed: result.completed,
      },
      ...prev,
    ]);

    setTodayStats((prev) => ({
      sessions: prev.sessions + 1,
      time: prev.time + dur,
      interruptions: prev.interruptions + ic,
    }));

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