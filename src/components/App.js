import React, { useState } from "react";
import "./../styles/App.css";
import { FormControl, Input, Button } from "@material-ui/core";

const App = () => {
  const [field, setFeild] = useState([]);

  const handleAdd = () => {
    setFeild([...field, { name: "", age: "" }]);
  };

  const handleRemove = (index) => {
    setFeild(field.filter((_, i) => i !== index));
  };

  const handeChange = (index, event) => {
    const { name, value } = event.target;
    const newField = field.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setFeild(newField);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ ...field });
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        {field.map((f, i) => (
          <div key={i}>
            <input
              name="name"
              placeholder="Name"
              value={f.name}
              onChange={(event) => handeChange(i, event)}
            />
            <input
              name="age"
              placeholder="Age"
              value={f.age}
              onChange={(event) => handeChange(i, event)}
            />
            <button type="button" onClick={() => handleRemove(i)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAdd}>
          Add field
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
