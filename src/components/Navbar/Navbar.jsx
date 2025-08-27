import React from 'react'
import "./Navbar.css"

function Navbar() {
    return (
        <div>
            <>
                <header>
                    <div className="left">
                        <div className='menu-container'>
                            <div className='menu'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
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
                        <img src="/src/assets/perro.jpg" alt="aca-va-el-user" className='user'/>
                    </div>
                </header>
                <div className='sidebar'>
                    <nav>
                            <li>
                                <a href="#" className='search'>
                                    <img src="/src/assets/perro.jpg" alt="" />
                                    <span>Buscar</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='selected'>
                                    <img src="/src/assets/perro.jpg" alt="" />
                                    <span>Productos</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/src/assets/perro.jpg" alt="" />
                                    <span>Ventas</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/src/assets/perro.jpg" alt="" />
                                    <span>Productos</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/src/assets/perro.jpg" alt="" />
                                    <span>Otro</span>
                                </a>
                            </li>
                    </nav>
                </div>
            </>
        </div>
    )
}

export default Navbar
