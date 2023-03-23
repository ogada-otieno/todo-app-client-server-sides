import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodosContext";

const AddTodo = () => {
  const [todos, setTodos] = useContext(TodoContext)
  // setting a new todo state
  const [newTodo, setNewTodo] = useState("");

  // handle input changes
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  // function to add new todo
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: newTodo,
      status: false,
    };
    console.log(newTask);
    setTodos([...todos, newTask]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="newTodo"
          value={newTodo}
          placeholder="Enter new todo"
        />
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
