import React from 'react'

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
      <div className="icons"><img src="/img/Group (2).svg" alt=""/></div>
      <div className="__ilustration">
        <h3>Envio</h3>
        <p>Desde y hasta cualquier lugar del país. Asegurado por el valor declarado.</p>
      </div>
      <div className="icons"> <i className="far fa-heart"></i></div>
      <div className="__ilustration">
        <h3>Precios accesibles</h3>
        <p>Nos encanta dar a los clientes los mejores precios del mercado.</p>
      </div>
      <div className="icons"> <i className="far fa-handshake"></i></div>
      <div className="__ilustration">
        <h3>Productos de alta calidad</h3>
        <p>Tenemos una gran cantidad de suministro de uñas de alta calidad. </p>
      </div>
    </div>   
    <div className="box__footer">
      <div className="logo">
        <img src="/images/WonderNails-Logotipo.png"/>
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