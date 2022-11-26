import React from 'react'

function Main() {
    return (
        <main className="mainHome">
            <section className="carrusel">
                <div className="glider-contain numero1">
                    <div className="glider">
                        <div><img src="/images/f6d85cc990cbf236fc58768bd05d04d4.jpg" alt="banner" /></div>
                        <div><img src="/img/Home/carrusel2.jpg" alt="banner" /></div>
                        <div><img src="/img/Home/carrusel3.jpg" alt="banner" /></div>
                        <div><img src="/img/Home/carrusel4.jpg" alt="banner" /></div>
                        <div><img src="/img/Home/carrusel5.jpg" alt="banner" /></div>
                    </div>
                    <button aria-label="Previous" className="glider-prev">«</button>
                    <button aria-label="Next" className="glider-next">»</button>
                    <div role="tablist" className="dots"></div>
                </div>
            </section>
            <section className="tienda">
                <article className="titulo">
                    <h5>Las uñas que querés a un click de distancia</h5>
                    <h1>Bienvenidos</h1>
                    <h3>a nuetra tienda</h3>
                    <div className="vectorRosa">
                        <img src="/img/Home/Vector 2.png" alt="vector" />
                    </div>
                </article>
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

                <article className="carruselTienda" />
                <div id="nuevo" className="seccion" />
                <div className="glider-contain numero1">
                    <div className="gliderProductos">
                        productosNuevos.forEach(producto {
                            <div className="caja">
                                <div className="caja-etiquetas">
                                    <span className="etiqueta">Nuevo</span>
                                    <a className="etiquetaC" href=""><i className="far fa-heart"></i></a>
                                </div>
                                <a href="/productos/detalle/<%- producto.id %> ">
                                    <div className="foto-prod">
                                        <img src="/img/products/<%- producto.imagenes[0].nombre %> "
                                            alt="Fotografía ilustrativa del producto" />
                                    </div>
                                    <h4>
                                        producto.nombre
                                    </h4>
                                    <span className="precio">$ producto.precio </span>
                                </a>
                                <div className="input">
                                    <input type="button" value="-"></input>
                                    <input className="medio" type="number" value="1" min="1" step="1"></input>
                                    <input type="button" value="+"></input>
                                </div>
                                <a href="/productos/carrito/<%- producto.id %> "><button
                                    className="comprar">Comprar</button></a>
                            </div>
                        })
                    </div>
                    <button aria-label="Previous" className="glider-prev"></button>
                    <button aria-label="Next" className="glider-next"></button>
                    <div role="tablist" className="dots"></div>
                </div>
                {/* </div> */}
                <div id="favoritos" className="seccion">
                    productosFavs.forEach(producto  {
                        <div className="caja">
                            <div className="caja-etiquetas">
                                <span className="etiqueta">Nuevo</span>
                                <a className="etiquetaC" href=""><i className="far fa-heart"></i></a>
                            </div>
                            <a href="/productos/detalle/<%- producto.id %> ">
                                <div className="foto-prod">
                                    <img src="/img/products/<%- producto.imagenes[0].nombre %> " alt="Fotografía ilustrativa del producto" />
                                </div>
                                <h4> producto.name </h4>
                                <span className="precio">$- producto.precio  </span>
                            </a>
                            <div className="input">
                                <input type="button" value="-"></input>
                                <input className="medio" type="number" value="1" min="1" step="1"></input>
                                <input type="button" value="+"></input>
                            </div>
                            <a href="/productos/carrito/<%- producto.id %> "><button className="comprar">Comprar</button></a>
                        </div>
                    })
                </div>

                <div id="oferta" className="seccion">
                    productosOferta.forEach(producto {
                        <div className="caja">
                            <div className="caja-etiquetas">
                                <span className="oferta" name="etiqueta"> producto.descuento  %</span>
                                <a className="etiquetaC" href=""><i className="far fa-heart"></i></a>
                            </div>
                            <a href="/productos/detalle/<%- producto.id %> ">
                                <div className="foto-prod">
                                    <img src="/img/products/<%- /* producto.imagenes[0].nombre */ %> " alt="" />
                                </div>
                                <h4> producto.nombre  </h4>
                                <span className="precioOferta">
                                    <span className="precioViejo">$ producto.precio   </span>
                                    <span>$ producto.precio - producto.precio * producto.descuento / 100  </span>
                                </span>
                            </a>
                            <div className="input">
                                <input type="button" value="-"></input>
                                <input className="medio" type="number" value="1" min="1" step="1"></input>
                                <input type="button" value="+"></input>
                            </div>
                            <a href="/productos/carrito"><button className="comprar">Comprar</button></a>
                        </div>
                    })
                </div>
                <div className="cajaBotonesT" />
                <ul className="botonesT" />
                <li><a href=""><label for="" className="botonT" /></a></li>
                <li><a href=""><label for="" className="botonT" /></a></li>
                <li><a href=""><label for="" className="botonT" /></a></li>
                <li><a href=""><label for="" className="botonT" /></a></li>
                <li><a href=""><label for="" className="botonT" /></a></li>
            </section>

            <a href="/productos">
                <h2 className="link-productos">TODOS</h2>
            </a>
            <section className="esmaltes">
                <div className="fondo">
                    <img src="/img/Home/fondoEsmaltes.png" alt="" />
                </div>
                <a href="/productos/Esmaltes"><button className="botonEsmalte"></button></a>

                <div className="cajaEsmaltes" />
                <div className="glider-contain" />
                <div className="gliderEsmaltes" />
                esmaltes.forEach.esmalte
                <article className="esmalte" />
                <a href="/productos/detalle/<%- esmalte.id %> ">
                    <div className="imgEsmalte"><img
                        src="/img/products/<%- esmalte.imagenes[0].nombre %> "
                        alt="Imagen de un esmalte" /></div>
                    <h4>
                        esmalte.nombre
                    </h4>
                    <span className="precioE">$ esmalte.precio  </span>
                </a>
                <div className="input" />
                <input type="button" value="-" />
                <input className="medio" type="number" value="1" min="1" step="1" />
                <input type="button" value="+" />
                <div />
                <a href="/productos/carrito"><button className="comprar">Comprar</button></a>
                <article />
                <div />

                <button aria-label="Previous" className="glider-prev"></button>
                <button aria-label="Next" className="glider-next"></button>
                <div role="tablist" className="dots"></div>

                <div />
                <div />

                <section />
                <section className="servicios">
                    <div className="cajaServicios">
                        <div className="imgServicios">
                            <img src="/img/img-salon.jpg" alt="Imagenes de nuestro local" />
                        </div>
                        <div className="textoS">
                            <h4 className="tituloServicios">Nuestros servicios</h4>
                            <p>Te invitamos a conocer más de nuestros servicios. Contamos con cuatro salones de belleza
                                repartidos al rededor del país. Nos especializamos en belleza y cuidado en general.
                                Contamos con la última tecnología en nuestros tratamientos y máquinas.</p>
                            <div className="botonWpp">
                                <button><img src="/img/Home/Icon.svg" alt="whatsapp" /></button>
                                <h4>Saca tu turno</h4>
                            </div>
                        </div>
                    </div>
                    <img className="vector" src="/img/Home/Vector 1.png" alt="" />
                </section>
                <section className="servicios">
                    <div className="cajaServicios">
                        <div className="imgServicios">
                            <img src="/img/img-salon.jpg" alt="Imagenes de nuestro local" />
                        </div>
                        <div className="textoS">
                            <h4 className="tituloServicios">Nuestros cursos</h4>
                            <p>Estamos desarrollando una academia de cursos para que puedas emprender de esto que tanto
                                te gusta! Sabemos que vas a estar ansiosa de saber más información. Te pedimos que nos
                                dejes tu mail para poder recibir el newletter.</p>
                            <form action="" method="post">
                                <label for="">Subscribite al newletter</label>
                                <input type="email" name="email" />
                            </form>
                        </div>
                    </div>
                    <img className="vector" src="/img/Home/Vector 1.png" alt="" />
                </section>
                <section className="ubicacion">
                    <div className="fondo">
                        <img src="/img/Home/fondoEsmaltes.png" alt="" />
                    </div>
                    <h3 className="dondeEstamos">Donde estamos</h3>
                    <div className="cajaEtiquetas">
                        <article className="Etiqub" name="etiquetaUbicacion1">
                            <div className="etiqueta1">
                                <img className="img" src="/img/Home/ubicación.alto.avellaneda.jpg" alt="" />
                                <div className="textoUbicacion">
                                    <h3>Alto avellaneda Shopping</h3>
                                    <h3 className="Etiqubh3">Visitanos</h3>
                                </div>
                            </div>
                        </article>
                        <article className="Etiqub" name="etiquetaUbicacion2">
                            <div className="etiqueta1">
                                <img className="img" src="/img/Home/ubicacion.alto.palermo.jpg" alt="" />
                                <div className="textoUbicacion">
                                    <h3>Alto <br> palermo shopping</br></h3>
                                    <h3 className="Etiqubh3">Visitanos</h3>
                                </div>
                            </div>
                        </article>
                        <article className="Etiqub" name="etiquetaUbicacion3">
                            <div className="etiqueta1">
                                <img className="img" src="/img/Home/ubicacion.el.mercado.jpg" alt="" />
                                <div className="textoUbicacion">
                                    <h3>El mercado</h3>
                                    <h3 className="Etiqubh3">Visitanos</h3>
                                </div>
                            </div>
                        </article>
                        <article className="Etiqub" name="etiquetaUbicacion4">
                            <div className="etiqueta1">
                                <img className="img" src="/img/Home/ubicacion.alto.comahue.jpg" alt="" />
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
                            <img src="/img/Home/logo.png" alt="" />
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
                            <div><img src="/img/Home/calendar-heart-02.png" alt="" />
                                <span>07/07/2022</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="instagram">
                    <div className="fotosIG">
                        <a className="img1" href="https://www.instagram.com/p/CgVTAhQA6S4/" /><img
                            src="/img/Home/img-instagram-1.jpg" alt="" />
                        <a className="img2" href="https://www.instagram.com/p/CgVTIUyAy4O/" /><img
                            src="/img/Home/img-instagram-2.jpg" alt="" />
                        <a className="img3" href="https://www.instagram.com/p/CgVTV7jgGlT/" /><img
                            src="/img/Home/img-instagram-3.jpg" alt="" />
                        <a className="img4" href="https://www.instagram.com/p/CgVaSUcNibN/" /><img
                            src="/img/Home/img-instagram-4.jpg" alt="" />
                        <a className="img5" href="https://www.instagram.com/p/CgVaU_6NQ4o/" /><img
                            src="/img/Home/img-instagram-5.jpg" alt="" />
                        <a className="img6" href="https://www.instagram.com/p/CgVaYEpNJX5/" /><img
                            src="/img/Home/img-instagram-6.jpg" alt="" />
                        <a className="img7" href="https://www.instagram.com/p/CgVaa1sNhKA/" /><img
                            src="/img/Home/img-instagram-7.jpg" alt="" />
                    </div>
                </section>


                <div className="body">
                    <div className="card">
                        <div className="face front">
                            <img src="/img/3(1).png" alt="" />
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
                            <img src="/img/1(1).png" alt="" />
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
                            <img src="/img/2(1).png" alt="" />
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
            </section>
        </main >
    )
}

export default Main