import React, { useState } from "react";


function COunter() {

  let [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    counter = counter + 1;
      setCounter(counter)
}
  const handleDecrement = () => {
  counter = counter - 1;
    setCounter(counter)
}
  return (
    <div>
      <div className="m-2">{counter}</div>
      <button className="m-2" onClick={handleIncrement}>+</button>
      <button className="m-2" onClick={handleDecrement}>-</button>
    </div>
  );
}

export default COunter;