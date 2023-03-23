import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TodoContext = createContext();

export const TodoProvider = (props) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    let url = "https://jsonplaceholder.typicode.com/todos"
    axios
      .get(url)
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};

