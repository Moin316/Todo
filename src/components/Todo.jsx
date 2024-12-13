import React, { useState, useEffect } from "react";
import "../styles/todo.css";
import Todoform from "./Todoform";
import TodoList from "./TodoList";

const Todo = () => {
  const [tasks, setTasks] = useState(()=>{
    const rawTodos = localStorage.getItem("tasks");
    if(!rawTodos) return [];
    return JSON.parse(rawTodos);
  });
  const [dateTime, setDateTime] = useState("");

  
  // Handle adding a new task
  const HandleSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return; // Avoid empty tasks
    const ifTodoContentMatched = tasks.find(
      (currtask) => currtask.content === content
    );
    if (ifTodoContentMatched) return; // Prevent duplicate tasks
    setTasks((prev) => [...prev, {id,content,checked}]); // Add task to state
  };

  // Handle deleting a task 
 const HandleDelete = (data) => {
   console.log(data); // Log the id for debugging
   console.log(tasks);

   const updatedTask = tasks.filter((task) => task.content !== data); // Filter by task id, not content

   setTasks(updatedTask); // Update the state with the filtered tasks array
   console.log(updatedTask); // Log the updated tasks for debugging
 };

  // Handle clearing all tasks
  const HandleClear = () => {
    setTasks([]);
  };
  localStorage.setItem('tasks',JSON.stringify(tasks));
  const handleCheck=(data)=>{
    
    const updated=tasks.map((task)=>{
       if(task.content===data){
        return {...task,checked: !task.checked}
       }
       else{
        return task;
       }
      }
    )
    setTasks(updated);
  }
  // Update dateTime every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();
      setDateTime(`${date} - ${time}`);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="todo-container">
      <header>
        <h1>To-Do List</h1>
        <h1>{dateTime}</h1>
      </header>
      <Todoform onAddTodo={HandleSubmit} />
      <section className="myUnOrdList">
        <ul className="todo-list">
          {tasks.map((task) => (
            <TodoList
              key={task.id} // Unique key for each task
              data={task.content} // Passing the entire task object
              HandleDelete={HandleDelete} // Delete handler
              checked={task.checked}
              onHandleChecked={handleCheck}
            />
          ))}
        </ul>
      </section>
      <button className="px-5 py-3 rounded-md bg-red-200" onClick={HandleClear}>
        Clear All
      </button>
    </section>
  );
};

export default Todo;
