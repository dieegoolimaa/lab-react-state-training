import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => Math.max(prevCount + 1, 0));
  };

  const decrement = () => {
    setCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  return (
    <div>
      <button onClick={decrement}> - </button>
      <span>{count}</span>
      <button onClick={increment}> + </button>
    </div>
  );
};

export default Counter;
