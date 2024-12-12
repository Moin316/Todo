import React, { useState } from "react";

const Todoform = ({ onAddTodo }) => {
  // Initialize state with content field (other properties can remain empty or default)
  const [inputValue, setInputValue] = useState({});

  // Handle the change in the input field
  const HandleOnChange = (value) => {
    setInputValue({ id:value, content:value,checked:"false" }); // Update the content field only
  };

  // Handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Don't add empty or whitespace-only tasks
    if (!inputValue.content.trim()) return;

    // Add the new task (using Date.now() to generate a unique id for each task)
    setInputValue({
      id:event.target.id,
      checked: false,
      content: event.target.content,
    });
    onAddTodo(inputValue);

    // Clear the input after submission
    setInputValue({ id: "", checked: false, content: "" });
  };
  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task"
          autoComplete="off"
          value={inputValue.content} // Bind value to the input field
          onChange={(event)=>HandleOnChange(event.target.value)} // Update state on change
        />
        <button type="submit" className="todo-btn">
          Add
        </button>
      </form>
    </section>
  );
};

export default Todoform;
