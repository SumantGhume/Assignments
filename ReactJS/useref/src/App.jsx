import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FocusInput from "./components/FocusInput";
import Timer from "./components/Timer";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">React useRef Examples</h2>

      <FocusInput/>
      <Timer/>
      <Counter/>

    </div>
  );
}

export default App;
