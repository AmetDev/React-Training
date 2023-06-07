import React, { useState } from "react";
function App() {
  function clickMe() {
    console.log(formData.name)
    return <div>{formData.name}</div>
  }
  const [formData, setFromData] = useState({name: ""});
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFromData((prevFromData) => ({...prevFromData, [name]: value}))
    console.log("hello")
  }
  
  return (
    <div className="App">
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
      <button type="button" onClick={clickMe}>+</button>
      <div>{clickMe}</div>
    </div>
  );
}

export default App;
