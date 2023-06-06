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
const human = (name, age, sex) => {
  return (
    <>
    <h1>{name}</h1>
    <div>{age}</div>
    <div>{sex}</div>
  </>
  )
 
}


const Person = ()=> {
  const [nameForm, setName] = useState({name: ""});
  const handleChange = (event) => {
    const {name, value} = event.target;
    setName((prevsetName) => ({...prevsetName, [name]: value}))
  }
  const hundleMes = (e) => {
    e.preventDefault();
    alert({nameForm});

  }

  return(
    <div>
       <form onSubmit={hundleMes}>
        <label>Enter your name:
          <input
            type="text" 
            value={nameForm.name}
            onChange={handleChange}
          />
        </label>
    </form>  
   </div>
  )

}


const renderHumans =() => {
  
}
  return (
    <div>
      <div className="m-2">{counter}</div>
      <button className="m-2" onClick={handleIncrement}>+</button>
      <button className="m-2" onClick={handleDecrement}>-</button>
      <Person/>
    </div>
  );
}

export default COunter;