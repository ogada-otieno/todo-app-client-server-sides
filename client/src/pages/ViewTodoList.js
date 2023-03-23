import React, { useContext } from "react";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/TodosContext";

const ViewTodoList = () => {
  const [todos, setTodos] = useContext(TodoContext);

  return (
    <div>
      {todos.length > 0 ? (
        <>
          <TodoList todos={todos} />
        </>
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
};

export default ViewTodoList;
