import React from 'react'
import Card from '../partials/Card'


import Article from '../home/Article'
function Products() {
    let productos = [
        {
            id: 1,
            img: 'Base-Coat-Gel-ON-OFF-Thuya.jpg',
            titulo: 'Base Coat Gel ON OFF Thuya x 14ml',
            precio: 5000,

        },
        {
            id: 2,
            img: 'Esmalte-Base-Coat-Gel-UVLED.jpg',
            titulo: 'Esmalte Base Coat Gel UV/LED',
            precio: 2300,

        },
        {
            id: 3,
            img: 'Esmalte-Semipermanente-Base-Coat-15-ml.jpg',
            titulo: 'Esmalte Semipermanente Base Coat x15 ml',
            precio: 2000,


        },

    ]
    return (
        <div>
            <main className='productos'>
                <ul class="ul">
                    <li class="crumb li"><a href="/">Home</a></li>
                    <li class="divider li">  </li>
                    <li class="crumb-active li" aria-current="page"><a href="/productos">Productos</a></li>
                </ul>
                <form action=""></form>
                <h1>Todos nuestros productos</h1>
                <section class="botones-secciones">
                    <ul>
                        <a href="#Nuevos"><li>Nuevos</li></a>
                        <a href="#Favoritos"><li>Favoritos</li></a>
                        <a href="#Ofertas"><li>Ofertas</li></a>
                        <a href="#Esmaltes"><li>Esmaltes</li></a>
                        <a href="#Otros"><li>Otros</li></a>
                    </ul>
                </section>
                <section>

                    <a class="link-esmaltes" href="/productos/<%- productosNuevos[0].estado.estado %> "><h2 id="Nuevos">Nuevos</h2></a>
                    <div className="carousel__lista">

                    <section className="esmaltes">
                    <article className="ofertas">
                        <div className="carousell">
                            <div className="carousel__contenedor">
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

                                
                            </div>

                        </div>
                    </article>

                    </section>
                    </div>
                </section>
                
                <section>
                    <a class="link-esmaltes" href="/productos/<%- productosFavs[0].estado.estado %> "><h2 id="Favoritos">Favoritos</h2></a>
                    <article className="carruselTienda">
                        <div className="carousell">
                            <div className="carousel__contenedor">

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

                            
                            </div>

                        </div>
                    </article>


        </section>
                <section>
                    <a class="link-esmaltes" href="/productos/<%- productosOfertaFiltrados[0].estado.estado %> "><h2 id="Ofertas">Ofertas</h2></a>
                    <article className="carruselTienda">
                        <div className="carousell">
                            <div className="carousel__contenedor">

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
                            </div>

                        </div>
                    </article>

                </section>
                <section class="lista-esmaltes">
                    <a class="link-esmaltes" href="/productos/<%- esmaltes[0].category.nombre %> "><h2 id="Esmaltes">Nuestros esmaltes</h2></a>
                    <article className="carruselTienda">
                        <div className="carousell">
                            <div className="carousel__contenedor">

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

                            
                            </div>

                        </div>
                    </article>

                </section>
                <section>
                    <a class="link-esmaltes" href="/productos/<%- otros[0].estado.estado %> "><h2 id="Otros">Otros</h2></a>
                    <article className="carruselTienda">
                        <div className="carousell">
                            <div className="carousel__contenedor">

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

                            
                            </div>

                        </div>
                    </article>

                </section>
            </main>
        </div>
    )
}

export default Products