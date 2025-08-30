import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Empleados from "./pages/Empleados/Empleados";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Navbar /> */}
      {/* <Register /> */}
      <Empleados />
    </>
  );
}

export default App;
