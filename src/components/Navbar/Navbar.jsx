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
                                <img src={imagenUser} alt="User" className='usuario'/>
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
                            <a href="#" className='search'>
                                <img src={imagenEmpleados} alt="User" className='icono'/>
                                <span>Empleados</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='selected'>
                                <img src={imagenDepartamentos} alt="User" className='icono'/>
                                <span>Departamentos</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={imagenSalarios} alt="User" className='icono'/>
                                <span>Salarios</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={imagenLibres} alt="User" className='icono'/>
                                <span>Libres</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={imagenRegistros} alt="User" className='icono'/>
                                <span>Registros (Horas/Mes)</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={imagenConfiguracion} alt="User" className='icono'/>
                                <span>Configuración</span>
                            </a>
                        </li>
                    </nav>
                </div>
                <div className={`sidebar-menu ${menu2 ? 'isActive' : ''}`}>
                    <nav>
                        <li>
                            <a href="#" className='search'>
                                <img src="/src/assets/perro.jpg" alt="" />
                                <span>Ver cuenta</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className='selected'>
                                <img src="/src/assets/perro.jpg" alt="" />
                                <span>Cambiar contraseña</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/src/assets/perro.jpg" alt="" />
                                <span>Tutorial</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/src/assets/perro.jpg" alt="" />
                                <span>Configuración</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/src/assets/perro.jpg" alt="" />
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
