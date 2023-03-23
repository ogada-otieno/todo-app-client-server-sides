import React from "react";
import axios from "axios";

const TodoItem = (props) => {
  const handleDelete = (task_id) => {
    console.log(task_id);
    console.log(props.todo);
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${task_id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p>
        { props.todo.title}
      </p>
      <button>Complete</button>
      <button onClick={() => handleDelete(props.todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
