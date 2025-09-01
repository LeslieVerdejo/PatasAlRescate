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
import Departamentos from "./pages/Departamentos/Departamentos";
import Horarios from "./pages/Horarios/Horarios";
import Salarios from "./pages/Salarios/Salarios";
import Registros from "./pages/Registros/Registros";
import Configuracion from "./pages/Configuracion/Configuracion";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/departamentos" element={<Departamentos />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/salarios" element={<Salarios />} />
        <Route path="/registros" element={<Registros />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
    </>
  );
}

export default App;
