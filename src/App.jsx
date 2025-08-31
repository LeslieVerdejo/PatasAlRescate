import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./pages/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register/Register";
import Empleados from "./pages/Empleados/Empleados";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/empleados" element={<Empleados />} />
      </Routes>
    </>
  );
}

export default App;
