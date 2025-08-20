import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#19191a] text-white">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
