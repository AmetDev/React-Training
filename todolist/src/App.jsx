import React, { useEffect, useState } from "react";
import { data } from "./data";

function App() {
  const [formData, setFormData] = useState('')
  const [arrData, setArrData] = useState(data);
  const handleChange = (e) => {
    const name = e.target.value;
    setFormData(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setArrData(prevArr => ([...prevArr, {id:arrData.length+1, name:formData, submittedData: formData}]))
    //setFormData((prevData) => ({ ...prevData, submittedData: prevData.name, name: "" }));
    
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <button type="submit">+</button>
      </form>
      <div>{arrData.map((ele) => (
        <li key={ele.id}>{ele.name}</li>
      ))}</div>
    </div>
  );
}

export default App;