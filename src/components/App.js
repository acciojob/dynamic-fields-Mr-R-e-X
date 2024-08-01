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
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={f.name}
              onChange={(event) => handeChange(i, event)}
            />
            <Input
              type="text"
              name="age"
              placeholder="Age"
              value={f.age}
              onChange={(event) => handeChange(i, event)}
            />
            <Button type="button" onClick={() => handleRemove(i)}>
              Remove
            </Button>
          </div>
        ))}
        <Button type="button" onClick={handleAdd}>
          Add field
        </Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default App;
