import { DELETE_ICON } from "../utils/constants";
import React from "react";

const TodoList = (props) => {
  const handleStatusChange = () => {
    const newStatus = props.status === "Complete" ? "Incomplete" : "Complete";
    props.updateStatus(props.id, newStatus);
  };

  return (
    <div className="flex justify-between items-center p-3 m-3 border-b-2 border-gray-200 bg-pink-100">
      <div className="flex justify-start items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={props.status === "Complete"}
          onChange={handleStatusChange}
        />
        <li
          className={`list-none ${
            props.status === "Complete" ? "line-through text-gray-500" : ""
          }`}
        >
          {props.todoItem}
        </li>
      </div>
      <img
        className="delete-image w-6 cursor-pointer"
        src={DELETE_ICON}
        alt="delete"
        onClick={() => props.deleteItem(props.id)}
      />
    </div>
  );
};

export default TodoList;
