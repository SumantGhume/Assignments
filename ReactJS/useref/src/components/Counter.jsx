import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div className="mb-3">
      <h3>Preserving Values Between Renders</h3>
      <h4>Now: {count}</h4>
      <h5>Before: {prevCountRef.current}</h5>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

