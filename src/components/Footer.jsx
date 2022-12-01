import React from 'react'
import logo from'../assets/Home/logo.png';

function Footer() {
  return (
<footer>
  <div className="goTop">
    <a href="#">
      <i className="fas fa-angle-up"></i>
    </a>
  </div>
  <div className="container__footer">
     <div className="container_ilustration">
      
    </div>   
    <div className="box__footer">
      <div className="logo">
        <img src={logo}/>
      </div>
      <div className="terms">
        <p>Suscríbete a nuestra newsletter y entérate de todas nuestras novedades.</p>
        <input type="email" name="email" id="email" placeholder="Tu email"/>
        <input className="subs" type="submit" value="Suscribite"/>
      </div>


    </div>
 
    <div className="box__footer">
      <h2>Nuestra compañia</h2>
      <a href="/nosotros">Sobre Nosotros</a>
      <a href="#">Preguntas Frecuentes</a>
      <a href="#">Contacto</a>
      <a href="#">Envios y Devoluciones</a>
    </div>

    <div className="box__footer">
      <h2>Informacion legal</h2>
      <a href="/politicas">Política de privacidad</a>
      <a href="/ventas">Política de ventas</a>
      <a href="/terminos">Términos y condiciones</a>
      <a href="/politicas-de-cookies">Política de cookies</a>
    </div>


  </div>
  <div className="container__footer1">
    <div className="box__footer1">
      <img src="/img/Small Card.svg" width="150px" alt=""/>
      <a href="#"></a>
    </div>


    <div className="box__copyright">
      <p><b>wonder nails </b>copyright © 2022 </p>
    </div>
  </div>

  <script src="/javascript/glider.js"></script>
  <script src="/javascript/carruselImg.js"></script>
</footer>  

  )}
export default Footer