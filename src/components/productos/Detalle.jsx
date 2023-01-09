import React from 'react'

function Detalle() {

  let producto = [
    {
      id: 1,
      nombre: "Base Coat Gel ON OFF Thuya x 14ml",
      marca: "Thuya",
      categoria: "Esmaltado Semipermanente",
      estado: " Oferta",
      precio: 2990,
      descuento: 10,
      descripcion: " Base Coat Gel ON OFF x 14ml,Es  un revolucionario sistema que revolucionó la técnica de esmaltado . Los esmaltes ON OFF tienen una duración de hasta 3 semanas, convirtiéndolo en el producto más rentable para las manicuras. La Base Coat Gel ON OFF x 14ml. es el producto utilizado para comenzar el tratamiento.",
      stock: 18,
      imagen: "Base-Coat-Gel-ON-OFF-Thuya.jpg"

    },
    {
      id: 2,
      nombre: "Esmalte Base Coat Gel UV/LED",
      marca: "Meliné",
      categoria: "Esmaltado Semipermanente",
      estado: "Oferta",
      precio: 1990,
      descuento: 10,
      descripcion: "Aplicar una pequeña capa de Base Coat Meliné previamente al Esmalte en Gel Color",
      stock: 24,
      imagen:
        "Esmalte-Base-Coat-Gel-UVLED.jpg"

    },

    {
      id: 3,
      nombre: "Esmalte Semipermanente Base Coat x15 ml",
      marca: "Anush",
      categoria: "Esmaltado Semipermanente",
      estado: "Oferta",
      precio: 1590,
      descuento: 11,
      descripcion: "Aplicar una pequeña capa de Base Coat Anush previamente al Esmalte de Color.",
      stock: 2,
      imagen:
        "Esmalte-Semipermanente-Base-Coat-15-ml.jpg"


    },
    {
      id: 4,
      nombre: "Cabina LED Profesional 54 Watts Nail Master Cabin",
      marca: "Meliné",
      categoria: "Esmaltado Semipermanente",
      estado: "Oferta",
      precio: 19990,
      descuento: 27,
      descripcion: "UNA CABINA CON EFECTO ANTI AGE. 54 Watts de Potencia (24 Lámparas LED). Timer secuencial en 10; 30 y 60 segundos. Gran Poder Lumínico. Secado Parejo, Rápido y Uniforme", stock: 12,
      imagen:
        " Cabina-LED-Profesional-54-Watts-Nail-Master-Cabin.jpg"

    },
  ]
  return (
    <body className="detail">
      <main>
        <ul className="ul">
          <li className="crumb li"><a href="/">Home</a></li>
          <li className="divider li"> {'> '}</li>
          <li className="crumb-active li" aria-current="page"><a href="/productos">Productos</a></li>
          <li className="divider li"> {'> '} </li>
          <li className="crumb-active li" aria-current="page"><a href="/productos">Producto</a> </li>
          <li className="divider li"> {'> '}</li>
          <li className="crumb-active li" aria-current="page">Anush </li>
        </ul>
        <section className="h1-1" >
          <h1>MI producto</h1>
        </section>
        {/*  carrusel  */}
        <div class="container-detail"> 
        
        <section className="imagenes">
            <article className="conteCarrusel" />
            <div className="itemCarrusel">
              {/* { <% if (producto.descuento > 0) { } */}
              <small className="descuento">15 % off</small>

              <img id="imgMain"src="/assets/productos/6-Esmaltes-Semipermanentes-Anush-Cabina-Beauty-Nail-Lamp-1.jpg" alt="Imagen principal" />
            </div>
            {/* <% if (producto.imagenes.length > 1) {  */}
            <div className="img-secundarias">
              {/* <% producto.imagenes.forEach(img => {  */}
              <img src="/assets/productos/6-Esmaltes-Semipermanentes-Anush-Cabina-Beauty-Nail-Lamp-2.jpg"alt="Imagen secundaria" onclick="document.getElementById('imgMain').setAttribute('/img/Products/<%= img.nombre ')" />
            </div>
          </section>
        <section className="detalle-producto">
          <h1 className="h1-2">6 Esmaltes Semipermanentes Anush + Cabina Beauty Nail Lamp</h1>
          <div className="span-color">
            <span className="span-titulo">{producto.color === undefined ? "" : "COLOR:"} </span>
            <span > {producto.color === undefined ? "" : producto.color}</span>
          </div>
          <article className="price">
            <p className="precio"> $5000</p>
            <span className="precio-final">$ {5000 > 0 ? Math.trunc(5000 - 5000 * 15 / 100) : 5000}</span>
            <small className="descuento1"> {15 > 0 ? '%' +15 + ' OFF' :null }</small>
          </article>
          <article className="conten-carrito">
            <div className="sumar-carrito">
              <input type="button" defaultValue={"-"} />
              <input className="medio" type="number" defaultValue={"1"} min="1" step="1" />
              <input type="button" defaultValue={"+"} />
            </div>
            <button className="comprar-boton" onclick=" addItem('<%= producto.id ')">añadir al Carrito</button>
          </article>
          <article className="fav-share">
            <div className="lista-deseos">
              <a href="#"><i className="far fa-heart"></i></a>
            </div>
            <div className="share">
              <a href="#"><i className="fas fa-share-alt"></i></a>
            </div>
          </article>
        </section>
        </div>


        <section className="descripcion">
          <h3>Descripcion</h3>
          <p> El combo incluye: 6 Esmaltes Semipermanentes Anush (Color a elección, los colores disponibles son los que figuran en la carta de colores de la misma publicación) 1 Cabina para Uñas LED Beauty Nail Lamp Anush Cabina profesional para uñas con luz LED - Diseño de vanguardia - Display digital de tiempo - Curado parejo y uniforme - Para llevar a todos lados - Doble carga: USB / 220 V - 12W Posee un revolucionario sistema de encendido automático cuando se introduce la mano de la clienta. El contador automático indica la cantidad de tiempo que transcurre con un máximo de 90 segundos. La luz de encendido se apagará una vez transcurrido el tiempo.  </p>
        </section>

       
      </main>
    </body>

  )
}

export default Detalle


