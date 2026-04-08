import { useState, useEffect, useRef } from 'react';

export default function useTimer(durationSeconds) {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!paused) {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const toggle = () => setPaused((p) => !p);
  const pause = () => setPaused(true);
  const resume = () => setPaused(false);
  const stop = () => clearInterval(intervalRef.current);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  return { timeLeft, display, paused, finished, toggle, pause, resume, stop };
}