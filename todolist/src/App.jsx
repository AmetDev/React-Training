import React, { useState } from "react";
function App() {

  const [formData, setFromData] = useState('');
  function clickMe(formD) {
    console.log(formD)
    return <div>{formD}</div>
}
const handle = (e) =>{
  const {name, value} = e.target
  console.log(name, value)
}


  const handleChange = (callback) => {
    setFromData(formData)   
    callback(formData.name)
  }
  
  return (
    <div className="App">
      <input  value={formData.name} onChange={handle}  type="text" id="name" name="name"/>
      <button type="button" onClick={()=>handleChange(clickMe)}>+</button>
      <div>{clickMe(formData.name)}</div>
    </div>
  );
}

export default App;
