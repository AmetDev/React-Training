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
const onChange = (e) => {
  var val = e.target.value;
  this.setState({name: val});
}
const handlePrevent = (e)=> {
  e.preventDefault();
  

}
const Person = ()=> {
  const [name, setName] = useState('');
  return(
    <div>  
    <form onSubmit={handlePrevent}>  
      <label>Name:</label>  
      <input type="text" onChange={onChange} />  
      <input type="submit" value="Отправить" />
    </form>  
    <br />  
    Name is: {name}  
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