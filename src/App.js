import React from "react";
import { Outlet } from "react-router-dom";
import Signup from './components/Singup'
function App() {
  return (
    <div>
     <Signup />
      <Outlet />
    </div>
  );
}

export default App;
