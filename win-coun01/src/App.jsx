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


const Person = ()=> {
  const [formData, setName] = useState({name: ""});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setName((prevSetName) => ({...prevSetName, [name]: value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const renderNames = () => {
    return <div>{formData.name}</div>
  }
  return(
    <div>
       <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
        <div>{renderNames()}</div>
    </form>  
   </div>
  )

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