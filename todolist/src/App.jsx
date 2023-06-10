import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", submittedData: "", arrData: [] });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  //LI
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({ ...prevData, submittedData: prevData.name, name: "" }));
    console.log(formData.submittedData)
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
      <div>{formData.submittedData}</div>
    </div>
  );
}

export default App;