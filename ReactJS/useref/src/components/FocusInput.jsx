import React, { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="mb-3">
      <h3>Accessing DOM Elements</h3>
      <input ref={inputRef} type="text" className="form-control" />
    </div>
  );
}
export default FocusInput