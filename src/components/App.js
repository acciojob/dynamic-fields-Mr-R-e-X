import React, { useState } from "react";
import "./../styles/App.css";
import { FormControl, Input, Button } from "@material-ui/core";

const App = () => {
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  const handleAddField = () => {
    setFields([...fields, { name: "", age: "" }]);
  };

  const handleRemoveField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newFields = fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={field.name}
            onChange={(event) => handleChange(index, event)}
          />
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={field.age}
            onChange={(event) => handleChange(index, event)}
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add More..
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
