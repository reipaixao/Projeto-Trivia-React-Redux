import React, { useState } from 'react';

function Timer() {
  const INITIAL_TIME = 30;

  const [count, setCount] = useState(INITIAL_TIME);
  const [intervalId, setIntervalId] = useState(0);

  const handleClick = () => {
    const INITIAL_TIME_CLICK = 1000;
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    const newIntervalId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, INITIAL_TIME_CLICK);
    setIntervalId(newIntervalId);
  };

  const clearTime = () => {
    if (count < 0) {
      clearInterval(setCount);
      clearInterval(intervalId);
      setCount(INITIAL_TIME);
      setIntervalId(0);
    }
  };

  clearTime();

  return (
    <div>
      <h1>{count}</h1>
      <button
        type="button"
        onClick={ handleClick }
      >
        {intervalId ? 'Stop' : 'Start'}
      </button>
    </div>
  );
}

export default Timer;
