import { useState } from "react";
import { formatSessionDate } from "./formatters";


export default function useSessionStore() {
  const [sessions, setSessions] = useState([]);
  const [todayStats, setTodayStats] = useState({
    sessions: 0,
    time: 0,
    interruptions: 0,
  });

  const recordSession = (task, result) => {
    const ic = result.interruptions.length;
    const dur = task.duration;
    const dateStr = formatSessionDate(new Date());

    setSessions((prev) => [
      {
        name: task.name,
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
  };

  return { sessions, todayStats, recordSession };
}