import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.map((item, index) => (
        <TodoItem key={index} todo={item} />
      ))}
    </div>
  );
};

export default TodoList;
