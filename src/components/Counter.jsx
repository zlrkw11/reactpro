import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClickPlus() {
    setCount(count + 1);
  }

  function handleClickMinus() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count value: {count}</h1>

      <button onClick={handleClickPlus}>Increment</button>
      <button onClick={handleClickMinus}>Decrement</button>
    </div>
  );
}
