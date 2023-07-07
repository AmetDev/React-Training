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
  const delValue = (index) => {
    setArrData(arrData.filter((_, i) => i !== index));
  }
  console.log(arrData)
  return (
    <main className="bg-slate-500 flex justify-center">
       <div className="">
      <form className="" onSubmit={handleSubmit}>
        <input className="rounded-xl"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <button className="bg-cyan-400 rounded-xl pr-2 pl-2"type="submit">add</button>
      </form>
      <ul>{arrData.map((ele) => (
        <li className="mt-2" key={ele.id-1}>{ele.name}
        <button onClick={() => delValue(ele.id-1)} className="border ml-3">del</button>
        </li>
        
      ))}</ul>
    </div>
    </main>
   
  );
}

export default App;