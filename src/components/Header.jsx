import React from 'react'
import logo from'../assets/Home/logo.png';
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
            
            
                <ul className="icons">
                    {/* <a href="">Hola locals.userLogin.name ! </a> */}
                    <a href="/usuarios/perfil">Accede a tu perfil</a>
                </ul> 
              
                    <ul className="icons">
                        <a href="/usuarios/register">Registro</a>
                        <a href="/usuarios/login">Login</a>
                    </ul> 
            
        </nav>
        <div className="logo">
            <a href="/">
                <img src={logo} alt="logo de su pagina"/>
            </a>
        </div>
    </div>
    <form action="/buscar" method="get">
        <div className="buscar">
            <input type="text" name="search" id="search" className="buscar_texto" placeholder="Buscar"/>
            <button type="submit"><i className="fas fa-search"></i></button>
        </div>
    </form>
    <div className="bars">
        <button className="button"><i className="fas fa-bars"></i></button>
    </div>
    <div className="shopping">
         {/* if (locals.userLogin) {  */}
            
                <button><a href="/admin/listar"><i className="fas fa-user-cog"></i></a></button>
             
  
        <button className="button2"><a href="productos/carrito"><i className="fas fa-shopping-bag"></i></a></button>
  </div>
</header>
)}

export default Header