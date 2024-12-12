import React from 'react'
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({data,HandleDelete}) => {
  return (
    <li  className="todo-item">
      <span className="bg-black text-white ">{data}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
    <button className="delete-btn" onClick={() => HandleDelete(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
}

export default TodoList
