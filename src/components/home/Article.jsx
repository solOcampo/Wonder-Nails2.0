import React from 'react'
function Article({ categoriasid, img, titulo,precio}) {

    return (
        <article className="carruselTienda">
            <div className="carousell">
                <div className="carousel__contenedor">
                    <div className="glider-contain">
                        <div className="glider">
                            <div className="cajaHome">
                                <div className="caja-etiquetas">
                                    <span className="etiqueta">Nuevo</span>
                                    <a className="etiquetaC" href=""><i className="far fa-heart"></i></a>
                                </div>
                                <a href={`/productos/detalle${categoriasid}`}>
                                    <div className="foto-prod">
                                        <img className="prodImg"src={`../../assets/Products/${img} `} alt={img}/>
                                    </div>
                                    <h4>
                                        {titulo}
                                    </h4>
                                    <p className="precio">${precio}</p>
                                </a>
                                <div className="input">
                                    <input type="button" defaultValue={'-'} />
                                    <input className="medio" type="number" defaultValue={'1'} min="1" step="1" />
                                    <input type="button" defaultValue={'+'} />
                                </div>
                                <a href="/productos/carrito/<%- producto.id %> "><button
                                    className="comprar">Comprar</button></a>
                            </div>
                        </div>

                        <button aria-label="Previous" className="glider-prev">«</button>
                        <button aria-label="Next" className="glider-next">»</button>
                        <div role="tablist" className="dots"></div>
                    </div>
                    <button aria-label="Anterior" className="carousel__anterior">
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <div className="carousel__lista">
                        <div className="cajaHome">
                            <div className="caja-etiquetas">
                                <span className="etiqueta">Nuevo</span>
                                <a className="etiquetaC" href=""><i className="far fa-heart"></i></a>
                            </div>
                            <a href="/productos/detalle/<%- producto.id %> ">
                                <div className="foto-prod">
                                    <img className="prodImg"src={`../../assets/Products/${img} `} alt={img}/>
                                </div>
                                <h4>

                                </h4>
                                <span className="precio"> </span>
                            </a>
                            <div className="input">
                                <input type="button" defaultValue={'-'} />
                                <input className="medio" type="number" defaultValue={'1'} min="1" step="1" />
                                <input type="button" defaultValue={'+'} />
                            </div>
                            <button className="comprar" onclick={"addItem('<%= producto.id %>'()"}>añadir al Carrito</button>

                        </div>


                    </div>

                    <button aria-label="Siguiente" className="carousel__siguiente">
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div id="favoritos" className="seccion">
                <div className="cajaHome">
                    <div className="caja-etiquetas">
                        <span className="etiqueta">Nuevo</span>
                        <a className="etiquetaC" href=""><i className="far fa-heart"></i></a>
                    </div>
                    <a href="/productos/detalle/<%- producto.id %> ">
                        <div className="foto-prod">
                            <img src={`../../assets/Products/${img} `} alt={img}/>
                        </div>
                        <h4></h4>
                        <span className="precio"> </span>
                    </a>
                    <div className="input">
                        <input type="button" defaultValue={'-'} />
                        <input className="medio" type="number" defaultValue={'1'} min="1" step="1" />
                        <input type="button" defaultValue={'+'} />
                    </div>
                    <a href="/productos/carrito/<%- producto.id %> "><button className="comprar">Comprar</button></a>
                </div>
            </div>
            <div id="oferta" className="seccion">
                <div className="cajaHome">
                    <div className="caja-etiquetas">
                        <span className="oferta" ></span>
                        <a className="etiquetaC" href=""><i className="far fa-heart"></i></a>
                    </div>
                    <a href="/productos/detalle/<%- producto.id %> ">
                        <div className="foto-prod">
                            <img src={`../../assets/Products/${img} `} alt={img}/>
                        </div>
                        <h4> </h4>
                        <span className="precioOferta">
                            <span className="precioViejo">  </span>
                            <span> </span>
                        </span>
                    </a>
                    <div className="input">
                        <input type="button" defaultValue={'-'} />
                        <input className="medio" type="number" defaultValue={'1'} min="1" step="1" />
                        <input type="button" defaultValue={'+'} />
                    </div>
                    <a href="/productos/carrito"><button className="comprar">Comprar</button></a>
                </div>
            </div>
            <div className="cajaBotonesT">
                <ul className="botonesT">
                    <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                    <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                    <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                    <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                    <li><a href=""><label htmlFor="" className="botonT" /></a></li>
                </ul>
            </div>
        </article >


    )
}

export default Article