import React, { useState } from "react";
import "./Navbar.css";
import imagenUser from "../../assets/perro.jpg";
import imagenEmpleados from "../../assets/empleados.png";
import imagenDepartamentos from "../../assets/departamentos.png";
import imagenConfiguracion from "../../assets/configuracion.png";
import imagenLibres from "../../assets/libres.png";
import imagenRegistros from "../../assets/registros.png";
import imagenSalarios from "../../assets/salarios.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [menu2, setMenu2] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const toggleMenu2 = () => {
    setMenu2(!menu2);
  };

  return (
    <div>
      <>
        <header>
          <div className="left">
            <div className="menu-container">
              <button className="boton p-2" onClick={toggleMenu}>
                <div className="menu">
                  <i className="fa-solid fa-bars"></i>
                </div>
              </button>
            </div>
            <div className="brand">
              <img src="/src/assets/perro.jpg" alt="perro" className="logo" />
              <span className="name">Gestión de patas al rescate</span>
            </div>
          </div>
          <div className="right">
            <a href="#">
              <img src="/src/assets/perro.jpg" alt="perro2" />
            </a>
            <a href="#">
              <img src="/src/assets/perro.jpg" alt="perro3" />
            </a>
            <a href="#">
              <img src="/src/assets/perro.jpg" alt="perro4" />
            </a>
            <button className="boton-user" onClick={toggleMenu2}>
              <img src={imagenUser} alt="User" className="usuario" />
            </button>
          </div>
        </header>
        <div className={`sidebar ${menu ? "isActive" : ""}`}>
          <nav>
            <li>
              <li>
                <Link to="/empleados" className="search">
                  <i className="fa-solid fa-users"></i>
                  <span>Empleados</span>
                </Link>
              </li>
            </li>
            <li>
              <Link to="/departamentos">
                <i className="fa-solid fa-building"></i>
                <span>Departamentos</span>
              </Link>
            </li>
            <li>
              <Link to="/salarios">
                <i className="fa-solid fa-money-bill"></i>
                <span>Salarios</span>
              </Link>
            </li>
            <li>
              <Link to="/horarios">
                <i className="fa-solid fa-calendar-days"></i>
                <span>Horario</span>
              </Link>
            </li>
            <li>
              <Link to="/registros">
                <i className="fa-solid fa-chart-bar"></i>
                <span>Registros</span>
              </Link>
            </li>
            <li>
              <Link to="/configuracion">
                <i className="fa-solid fa-gear"></i>
                <span>Configuración</span>
              </Link>
            </li>
          </nav>
        </div>
        <div className={`sidebar-menu ${menu2 ? "isActive" : ""}`}>
          <nav>
            <li>
              <a href="#" className="search">
                <i className="fa-solid fa-user"></i>
                <span>Ver cuenta</span>
              </a>
            </li>
            <li>
              <a href="#" className="selected">
                <i className="fa-solid fa-unlock"></i>
                <span>Cambiar contraseña</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-circle-info"></i>
                <span>Tutorial</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-solid fa-gear"></i>
                <span>Configuración</span>
              </a>
            </li>
            <li>
              <Link to="/login">
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Cerrar sesión</span>
              </Link>
            </li>
          </nav>
        </div>
      </>
    </div>
  );
}

export default Navbar;
