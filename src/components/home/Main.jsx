import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import SuportAdmin from '../../components/contenido/Contenido'

import Card from '../partials/Card'
import Carruselauto from '../productCarrusel/ProductCarrusel'
import Article from './Article';
// logo
import logo from '../../assets/home/header/logo.png';
// carrusel
// import img1 from '../../assets/home/carrusel2.jpg'
import img2 from '../../assets/home/Vector 2.png'
import imgCarru1 from '../../assets/home/carrousel/img-instagram-1.jpg'
import imgCarru2 from '../../assets/home/carrousel/img-instagram-2.jpg'
import imgCarru3 from '../../assets/home/carrousel/img-instagram-3.jpg'
import imgCarru4 from '../../assets/home/carrousel/img-instagram-4.jpg'
import imgCarru5 from '../../assets/home/carrousel/img-instagram-5.jpg'
import imgCarru6 from '../../assets/home/carrousel/img-instagram-6.jpg'
import imgCarru7 from '../../assets/home/carrousel/img-instagram-7.jpg'

// salon
import salonimg from '../../assets/home/img-salon.jpg'
import fondoesmaltes from '../../assets/home/fondoEsmaltes.png'
import whatssap from '../../assets/home/Icon.svg'

// ubicacion
import altoavellaneda from '../../assets/home/ubicación.alto.avellaneda.jpg'
import altopalermo from '../../assets/home/ubicacion.alto.palermo.jpg'
import elmercado from '../../assets/home/ubicacion.el.mercado.jpg'
import altocamahue from '../../assets/home/ubicacion.alto.comahue.jpg'


// comentarios
import calendarioimg from '../../assets/home/calendar-heart-02.png'


import Carru from '../productCarrusel/ProductCarrusel'


import giratoria3 from '../../assets/home/3(1).png'
import giratoria1 from '../../assets/home/1(1).png'
import giratoria2 from '../../assets/home/2(1).png'






function Main() {
    let productos = [
        {
            id: 1,
            img: 'Base-Coat-Gel-ON-OFF-Thuya.jpg',
            titulo: 'Base Coat Gel ON OFF Thuya x 14ml',
            precio: 5000,
            url: <NavLink to={"/productos/nuevos"} />

        },
        {
            id: 2,
            img: 'Esmalte-Base-Coat-Gel-UVLED.jpg',
            titulo: 'Esmalte Base Coat Gel UV/LED',
            precio: 2300,
            url: <NavLink to={"/productos/favoritos"} />

        },
        {
            id: 3,
            img: 'Esmalte-Semipermanente-Base-Coat-15-ml.jpg',
            titulo: 'Esmalte Semipermanente Base Coat x15 ml',
            precio: 2000,
            url: <NavLink to={"/productos/oferta"} />


        },

    ]
    return (
        <body className="home">
            <main className='mainHome'>
            <Carru/>

               

                <section className="tienda" >
                    {/* <!-- INICIO --> */}
                    <article className="titulo">
                        <h5>Las uñas que querés a un click de distancia</h5>
                        <h1>Bienvenidos</h1>
                        <h3>a nuetra tienda</h3>
                        <div className="vectorRosa">
                            <img src={img2} alt="vector" />
                        </div>
                    </article>
                    {/* <!-- SECCIONES --> */}
                    <article>
                        <ul className="secciones">
                            <li><a href="#nuevo">
                                <h4>Novedades</h4>
                            </a></li>
                            <li><a href="#favoritos">
                                <h4>Favoritos</h4>
                            </a></li>
                            <li><a href="#oferta">
                                <h4>Ofertas</h4>
                            </a></li>
                        </ul>
                    </article>
                    {/* <!-- CARRUSEL DE SECCIONES --> */}

                    <article className="carruselTienda">
                        <div className="carousell">
                            <div className="carousel__contenedor">

                                <button aria-label="Anterior" className="carousel__anterior">
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <div className="carousel__lista">
                                    <section className="caja">

                                        <Card>

                                        </Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Card></Card>
                                        <Card></Card>

                                    </section>


                                </div>

                                <button aria-label="Siguiente" className="carousel__siguiente">
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>

                            <div role="tablist" className="carousel__indicadores"></div>
                        </div>
                    </article>

                    {/* <!-- favoritos --> */}

                    <div className="cajaBotonesT">
                        <ul className="botonesT">
                            <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                            <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                            <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                            <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                            <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                        </ul>
                    </div>

                    <a href="/productos">
                        <h2 className="link-productos">TODOS</h2>
                    </a>
                </section>


                <section className="servicios">
                    <div className="cajaServicios">
                        <div className="imgServicios">
                            <img src={salonimg} alt="Imagenes de nuestro local" />
                        </div>
                        <div className="textoS">
                            <h4 className="tituloServicios">Nuestros servicios</h4>
                            <p>Te invitamos a conocer más de nuestros servicios. Contamos con cuatro salones de belleza
                                repartidos al rededor del país. Nos especializamos en belleza y cuidado en general.
                                Contamos con la última tecnología en nuestros tratamientos y máquinas.</p>
                            <div className="botonWpp">
                                <button><img src={whatssap} alt="whatsapp" /></button>
                                <h4>Saca tu turno</h4>
                            </div>
                        </div>
                    </div>
                    <img className="vector" src="/img/Home/Vector 1.png" alt="" />
                </section>
                <section className="servicios">
                    <div className="cajaServicios">
                        <div className="imgServicios">
                            <img src={salonimg} alt="Imagenes de nuestro local" />
                        </div>
                        <div className="textoS">
                            <h4 className="tituloServicios">Nuestros cursos</h4>
                            <p>Estamos desarrollando una academia de cursos para que puedas emprender de esto que tanto
                                te gusta! Sabemos que vas a estar ansiosa de saber más información. Te pedimos que nos
                                dejes tu mail para poder recibir el newletter.</p>
                            <form action="" method="post">
                                <label htmlFor="">Subscribite al newletter</label>
                                <input type="email" name="email" />
                            </form>
                        </div>
                    </div>
                    <img className="vector" src="/img/Home/Vector 1.png" alt="" />
                </section>
                <section className="ubicacion">
                    <div className="fondo">
                        <img src={fondoesmaltes} alt="" />
                    </div>
                    <h3 className="dondeEstamos">Donde estamos</h3>
                    <div className="cajaEtiquetas">
                        {/* <!-- flip cards - aún no logrado --> */}
                        <article className="Etiqub" >
                            <div className="etiqueta1">
                                <img className="img" src={altoavellaneda} alt="" />
                                <div className="textoUbicacion">
                                    <h3>Alto avellaneda Shopping</h3>
                                    <h3 className="Etiqubh3">Visitanos</h3>
                                </div>
                            </div>
                        </article>
                        <article className="Etiqub" >
                            <div className="etiqueta1">
                                <img className="img" src={altopalermo} alt="" />
                                <div className="textoUbicacion">
                                    <h3>Alto  palermo shopping</h3>
                                    <h3 className="Etiqubh3">Visitanos</h3>
                                </div>
                            </div>
                        </article>
                        <article className="Etiqub">
                            <div className="etiqueta1">
                                <img className="img" src={elmercado} alt="" />
                                <div className="textoUbicacion">
                                    <h3>El mercado</h3>
                                    <h3 className="Etiqubh3">Visitanos</h3>
                                </div>
                            </div>
                        </article>
                        <article className="Etiqub" >
                            <div className="etiqueta1">
                                <img className="img" src={altocamahue} alt="" />
                                <div className="textoUbicacion">
                                    <h3>Alto comahue Shopping</h3>
                                    <h3 className="Etiqubh3">Visitanos</h3>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="opiniones">
                    <div className="headerOpiniones">
                        <div className="logoOp">
                            <img src={logo} alt="" />
                        </div>
                        <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="textoOp">
                            <h5>Tu opinión cuenta</h5>
                            <h2>9/10</h2>
                        </div>
                    </div>
                    <ul className="flechasOp">
                        <li className="izquierda"><a href=""><i className="fas fa-angle-left"></i></a></li>
                        <li className="derecha"><a href=""><i className="fas fa-angle-right"></i></a></li>
                    </ul>
                    <div className="opinion">
                        <div className="star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p>Buenos precios, buenos productos.
                            Excelente atención.
                            Qué más podría pedir?
                            Sin duda voy a seguir comprando"
                        </p>
                        <div className="ultimo">
                            <h5>Erika R.</h5>
                            <div><img src={calendarioimg} alt="" />
                                <span>07/07/2022</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="instagram">
                    <div className="fotosIG">
                        <a className="img1" href="https://www.instagram.com/p/CgVTAhQA6S4/"><img src={imgCarru1} alt="" /></a>
                        <a className="img2" href="https://www.instagram.com/p/CgVTIUyAy4O/"><img src={imgCarru2} alt="" /></a>
                        <a className="img3" href="https://www.instagram.com/p/CgVTV7jgGlT/"><img src={imgCarru3} alt="" /></a>
                        <a className="img4" href="https://www.instagram.com/p/CgVaSUcNibN/"><img src={imgCarru4} alt="" /></a>
                        <a className="img5" href="https://www.instagram.com/p/CgVaU_6NQ4o/"><img src={imgCarru2} alt="" /></a>
                        <a className="img6" href="https://www.instagram.com/p/CgVaYEpNJX5/"><img src={imgCarru6} alt="" /></a>
                        <a className="img7" href="https://www.instagram.com/p/CgVaa1sNhKA/"><img src={imgCarru7} alt="" /></a>
                    </div>
                </section>


                <div className="body">
                    <div className="card">
                        <div className="face front">
                            <img src={giratoria3} alt="" />
                        </div>
                        <div className="face back">
                            <h3>Productos de alta calidad</h3>
                            <p>Tenemos una gran cantidad de suministro de uñas de alta calidad.</p>
                            <div className="link">
                                <a href="#">Ver Detalles</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="face front">
                            <img src={giratoria1} alt="" />
                        </div>
                        <div className="face back">
                            <h3>Precios accesibles</h3>
                            <p>Nos encanta dar a los clientes los mejores precios del mercado</p>
                            <div className="link">
                                <a href="#">Ver Detalles</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="face front">
                            <img src={giratoria2} alt="" />
                        </div>
                        <div className="face back">
                            <h3>Envio</h3>
                            <p>Desde y hasta cualquier lugar del país.
                                Asegurado por el valor declarado.</p>
                            <div className="link">
                                <a href="#">Ver Detalles</a>
                            </div>
                        </div>
                    </div>

                </div>
    
            </main >
        </body>

    )
}
export default Main