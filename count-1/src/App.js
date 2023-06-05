import React, { useState } from "react";
import { ReactDOM } from "react";


export function App() {
  let [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    console.log(setCounter(counter+1))
}
  return (
    <div>
      <h3>Выберите количество участников</h3>
      <button onClick={handleIncrement}>+</button>
      {/* /*<button onClick={Increment}>-</button>*/}
    </div>
  );
}

