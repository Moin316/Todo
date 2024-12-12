import React from 'react'
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({ data, HandleDelete, checked, onHandleChecked }) => {
  return (
    <li className="todo-item">
      <span className={`${checked ? "text-3xl text-green-600" : "text-3xl text-blue-900"}`}>
        {data}
      </span>
      <button className="check-btn" onClick={() => onHandleChecked(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => HandleDelete(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList
