import React, { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoHeaderDropdown from "./TodoHeaderDropdown";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [showBanner, setShowBanner] = useState(false);

  const addList = (inputText) => {
    setTodoList([
      ...todoList,
      { id: crypto.randomUUID(), text: inputText, status: "Incomplete" },
    ]);
  };

  const deleteItem = (id) => {
    const updatedList = todoList.filter((item) => item.id !== id);
    setTodoList(updatedList);
  };

  const updateStatus = (id, newStatus) => {
    const updatedWithStatusList = todoList.map((item) => {
      return item.id === id ? { ...item, status: newStatus } : item;
    });
    setTodoList(updatedWithStatusList);
    if (newStatus === "Complete") {
      setShowBanner(true);
      setTimeout(() => setShowBanner(false), 2000);
    }
  };

  // filter function will check if the status is all, so every item while iteration it will be passed to filteredList
  // when not all will check the status of the item and the status selected by the user if matched return true and the item will be added to the filteredlist else false
  const filteredList = todoList.filter((item) => {
    if (filterStatus === "All") return true;
    return item.status === filterStatus;
  });

  return (
    <>
      {showBanner && (
        <div className="banner bg-green-200 text-green-800 p-2 mb-2 fixed top-0 left-1/2 transform -translate-x-1/2 shadow-lg z-50">
          Task marked as complete!
        </div>
      )}

      <TodoAdd addList={addList} />
      <TodoHeaderDropdown
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />
      {filterStatus === "Incomplete" && filteredList.length === 0 ? (
        <div className="text-gray-500">No pending tasks, Enjoy!</div>
      ) : (
        <ul className="max-h-96 overflow-y-auto">
          {filteredList.map((todoItem) => (
            <TodoList
              key={todoItem.id}
              todoItem={todoItem.text}
              status={todoItem.status}
              id={todoItem.id}
              deleteItem={deleteItem}
              updateStatus={updateStatus}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default TodoContainer;
