import React from 'react'
import { NavLink } from 'react-router-dom';

import logo from'../../assets/home/header/logo.png';
function Header() {
  return (
    <header>
    <div className="top">
        <nav className="navIcons">
            <ul className="icons">
                <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                <a href="whatssap"><i className="fab fa-whatsapp"></i></a>
            </ul>
        </nav>
        <nav className="users">
            
            {/* <% if (locals.userLogin) { %> */}
                
                <ul className="icons">
                    <a href="">Hola  </a>
                    <NavLink to="/usuarios/perfil">Accede a tu perfil</NavLink>
                    {/* <a href="/usuarios/perfil">Accede a tu perfil</a> */}
                </ul> 
                {/* // <% } else { %> */}
                    <ul className="icons">
                        <a href="/usuarios/register">Registro</a>
                        <a href="/usuarios/login">Login</a>
                    </ul> 
            {/* // <% } %> */}
        </nav>
    </div>
    <div className="center">
        <div className="logo">
            <a href="/">
                <img src={logo} alt="logo de su pagina"/>
            </a>
        </div>
        <form  method="get">
            <div className="buscar">
                <input type="text" name="search" id="search" className="buscar_texto" placeholder="Buscar"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </div>
        </form>
    </div>
    <div className="shopping">
        {/* <% if (locals.userLogin) { %> */}
            {/* <% if ((+locals.userLogin.rol) === 1) { %> */}
                <button><a href="/admin/listar"><i className="fas fa-user-cog"></i></a></button>
        {/* <% } %> */}

        <button className="cart-btn" id="cart-btn" ><a href="/productos/carrito"><i className="fas fa-shopping-bag"></i></a></button>
    </div>
    <div className="cart-container"></div>  

    <input type="checkbox" id="check"/>
    <label htmlFor="check" className="button"><i className="fas fa-bars"></i></label>

    <div className="burgerMenu">
        <ul>
            {/* <% if (locals.userLogin) { %> */}
                <li className="active"></li>
                <li className="hover"><a href="/usuarios/perfil">Accede a tu perfil</a></li>
            {/* <% } %> */}
            <li>Productos</li>
            <li className="hover"><a href="/productos">Todos los productos</a></li>
            <li className="hover"><a href="/productos/Nuevo">Nuevos</a></li>
            <li className="hover"><a href="/productos/Favoritos">Favoritos</a></li>
            <li className="hover"><a href="/productos/Oferta">Ofertas</a></li>
            {/* <% if (locals.userLogin) { %> */}
             {/* <% if ((+locals.userLogin.rol) === 1) { %> */}
                <li>Administrador</li>
                <li className="hover"><a href="/admin/listar">Listado de productos</a></li>
                <li className="hover"><a href="/admin/crear">Crear un nuevo producto</a></li>
                {/* <% } %>
            <% } %> */}
            <li className="hover"><span>Ubicación</span></li>
            <li className="hover"><span>Nosotros</span></li>
            {/* <% if (locals.userLogin) { %> */}
                <li>
                    <form action="/usuarios/logout?_method=DELETE" method="POST">
                        <button className="logout hover" type="submit"><i className="fas fa-sign-out-alt"></i> Cerrar sesión</button>
                    </form>
                </li>
            {/* <% } %> */}
        </ul>
    </div>
    

</header>
)}
export default Header