import React, { useState, useRef, useEffect } from "react";

const TodoAdd = ({ addList }) => {
  const [inputText, setInputText] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div className="w-full h-12 my-7 flex items-center gap-2">
      <input
        className="border border-black block flex-1 py-2 px-3 rounded-md"
        ref={inputRef}
        type="text"
        placeholder="Enter todo task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button
        className="bg-green-500 text-white border border-green-600 rounded-md py-2 px-4"
        onClick={() => {
          addList(inputText);
          setInputText("");
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default TodoAdd;
