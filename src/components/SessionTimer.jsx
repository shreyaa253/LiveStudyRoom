import React, { useEffect, useState } from "react";

function SessionTimer({ duration, onExpire }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onExpire]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs}h ${mins}m ${secs}s`;
  };

  return (
    <div style={{ marginTop: "5px", fontSize: "12px" }}>
      ⏳ {formatTime(timeLeft)}
    </div>
  );
}

export default SessionTimer;