import React from "react";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <div className="wholePage flex justify-center items-center min-h-screen bg-gradient-to-b from-white via-pink-200 to-pink-400">
      <div className="todoBox flex flex-col w-5/12 h-[600px] m-16 p-5 bg-white border border-black mx-auto">
        <TodoContainer />
      </div>
    </div>
  );
};

export default App;
