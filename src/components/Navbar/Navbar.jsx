import React, { useState } from 'react'
import "./Navbar.css"
import imagenUser from "../../assets/perro.jpg"
import imagenEmpleados from "../../assets/empleados.png"
import imagenDepartamentos from "../../assets/departamentos.png"
import imagenConfiguracion from "../../assets/configuracion.png"
import imagenLibres from "../../assets/libres.png"
import imagenRegistros from "../../assets/registros.png"
import imagenSalarios from "../../assets/salarios.png"

function Navbar() {

    const [ menu , setMenu ] = useState( false )
    const [ menu2 , setMenu2 ] = useState( false )

    const toggleMenu = () => {
        setMenu( !menu)
    }

    const toggleMenu2 = () => {
        setMenu2( !menu2)
    }

    return (
        <div>
            <>
                <header>
                    <div className="left">
                        <div className='menu-container'>
                            <button className='boton p-2' onClick={ toggleMenu}>
                            <div className='menu'>
                                <i class="fa-solid fa-bars"></i>
                            </div>
                            </button>
                        </div>
                        <div className='brand'>
                            <img src="/src/assets/perro.jpg" alt="perro" className='logo'/>
                            <span className='name'>Gestión de patas al rescate</span>
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
                        <button className='boton-user' onClick={ toggleMenu2}>
                                <img src={imagenUser} alt="User" className='usuario'/>
                        </button>
                    </div>
                </header>
                <div className={`sidebar ${menu ? 'isActive' : ''}`}>
                    <nav>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-users"></i>
                                <span>Empleados</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-building"></i>
                                <span>Departamentos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-money-bill"></i>
                                <span>Salarios</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-calendar-days"></i>
                                <span>Horario</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-chart-bar"></i>
                                <span>Registros (Horas/Mes)</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-gear"></i>
                                <span>Configuración</span>
                            </a>
                        </li>
                    </nav>
                </div>
                <div className={`sidebar-menu ${menu2 ? 'isActive' : ''}`}>
                    <nav>
                        <li>
                            <a href="#" className='search'>
                                <i class="fa-solid fa-user"></i>
                                <span>Ver cuenta</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='selected'>
                                <i class="fa-solid fa-unlock"></i>
                                <span>Cambiar contraseña</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-circle-info"></i>
                                <span>Tutorial</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-gear"></i>
                                <span>Configuración</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <span>Cerrar sesión</span>
                            </a>
                        </li>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default Navbar
