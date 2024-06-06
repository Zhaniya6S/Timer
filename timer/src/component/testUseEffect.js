import React, { useState, useEffect } from "react";

function Timer({ intervalValue }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((value) => value + 1);
    }, intervalValue);

    return () => clearInterval(intervalId);
  }, [intervalValue]);

  return (
    <div className="container">
      <h1>Таймер</h1>
      <h2>{value}</h2>
    </div>
  );
}

function Component() {
  const [intervalValue, setIntervalValue] = useState(1000);

  const handleIntervalClick = (ms) => {
    setIntervalValue(ms);
  };

  return (
    <div className="container">
      <Timer intervalValue={intervalValue} />
      <button onClick={() => handleIntervalClick(100)}>100мс</button>
      <button onClick={() => handleIntervalClick(500)}>500мс</button>
      <button onClick={() => handleIntervalClick(1000)}>1с</button>
    </div>
  );
}

export default Component;
