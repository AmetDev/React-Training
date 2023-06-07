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
  const [formData, setName] = useState({name: ""});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setName((prevSetName) => ({...prevSetName, [name]: value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${formData.name}`)
  }


  return(
    <div>
       <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
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