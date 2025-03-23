import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Timer() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  return (
    <div className="mb-3">
    <h3>Storing Mutable Values (Timer)</h3>
    <h4>Timer: {time} seconds</h4>
    <button className="btn btn-success me-2" onClick={startTimer}>
      Start Timer
    </button>
    <button className="btn btn-danger" onClick={stopTimer}>
      Stop Timer
    </button>
  </div>
  );
}
export default Timer