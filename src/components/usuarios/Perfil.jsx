import React from 'react'

function Perfil() {
    return (

        <body className="perfil">
            <main>
                <section className="perfil-usuario">
                    <div className="contenedor-perfil">
                        <div className=" portada-perfil " >
                            <div className="sombra"> </div>
                            <div className="avatar-perfil">

                                <img src="/img/users/locals.userLogin.image_profil " alt="Imagen de perfil" />
                                <a id="btn-abrir-popup">
                                    <div className="cambiar-foto">
                                        <i className="fas fa-camera"></i>
                                        <span>Cambiar foto</span>
                                    </div>
                                </a>
                            </div>
                            <div className="datos-perfil">
                                <h6 className="titulo-usuario admin"> "Administrador" </h6>
                                <h6 className="titulo-usuario">Usuario administrador</h6>
                                <h4 className="email-usuario">usuario@gmail.com</h4>
                            </div>

                            <div className="opcciones-perfil">
                                <a className="portada" id="btn-abrir-popupPortada">
                                    <span>Cambiar portada</span>
                                </a>
                                <a className="editar" href="/usuarios/perfil/editar"><i className="fas fa-wrench"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="menu-perfil">
                        <ul className="titulos">
                            <li><a href="#" title=""><i className="far fa-heart"></i> Favoritos</a></li>
                            <li><a href="#" title=""><i className="fas fa-gift"></i> Mi pedido</a></li>
                            <li><a href="#" title=""><i className="fas fa-map-marker-alt"></i> Ubicacion</a></li>
                            <li><form action="/usuarios/logout?_method=DELETE" method="POST">
                                <button type="submit"><i className="fas fa-sign-out-alt"></i> Salir</button>
                            </form></li>

                        </ul>
                    </div>

                </section>
                {/* <h2>Te puede interesar</h2>

                <section className="instagram">
                    <div className="fotosIG">
                        <a className="img1" href="https://www.instagram.com/p/CgVTAhQA6S4/"><img src="/images/19fac1a3846ba9f935f0dfc06581c073.jpg" alt="" /></a>
                        <a className="img2" href="https://www.instagram.com/p/CgVTIUyAy4O/"><img src="/images/87f38ac3f67f7b148784589a47f11d6e.jpg" alt="" /></a>
                        <a className="img3" href="https://www.instagram.com/p/CgVTV7jgGlT/"><img src="/images/d3bd758c885dfd1f67a3a9eaf03faca3.jpg" alt="" /></a>
                        <a className="img4" href="https://www.instagram.com/p/CgVaSUcNibN/"><img src="/images/f6d85cc990cbf236fc58768bd05d04d4.jpg" alt="" /></a>
                        <a className="img5" href="https://www.instagram.com/p/CgVaU_6NQ4o/"><img src="/images/1375f5480a35761d807c86992d7e29f4.jpg" alt="" /></a>
                        <a className="img6" href="https://www.instagram.com/p/CgVaYEpNJX5/"><img src="/images/c646209b4c08e3ff0ed8178ca7bb5c79.jpg" alt="" /></a>
                        <a className="img7" href="https://www.instagram.com/p/CgVaa1sNhKA/"><img src="/images/96a187667c1694e63308cc7b175c295b.jpg" alt="" /></a>
                    </div>
                </section> */}
                <div className="overlay" id="overlay">
                    <div className="popup" id="popup">
                        <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup"><i className="fas fa-times"></i></a>
                        <h3>Cambiar foto de perfil</h3>
                        <form action="/usuarios/perfil?_method=PUT" method="post" encType="multipart/form-data">
                            <div className="col col-5">
                                <label className="selectImg" htmlFor="product-img">
                                    <div className="box-img">
                                        <img id="img-preview" className="img-fluid img-thumbnail imagen-height rounded" src="/img/users/locals.userLogin.image_profil" alt="" />
                                    </div>
                                </label>
                                <div className="form-admin__box inactivo">
                                    <input className="d-none" id="product-img" type="file" name="imagenPerfil" placeholder="Imagen del Producto" accept="image/*" />
                                </div>
                            </div>
                            <button className="btn-submit" type="submit">Guardar</button>
                        </form>
                    </div>
                    <div className="overlay" id="overlayPortada">
                        <div className="popup" id="popupPortada">
                            <a href="#" id="btn-cerrar-popupPortada" className="btn-cerrar-popup"><i className="fas fa-times"></i></a>
                            <h3>Cambiar foto de portada</h3>
                            <form action="/usuarios/perfil?_method=PUT" method="post" encType="multipart/form-data">
                                <div className="col col-5">
                                    <label className="selectImg" htmlFor="product-sub-img-1">
                                        <div className="box-imgPortada">
                                            <img id="sub-img-preview-1" className="img-fluid img-thumbnail imagen-height rounded" src="/img/users/locals.userLogin.image_frontPage" alt="" />
                                        </div>
                                    </label>
                                    <div className="form-admin__box inactivo">
                                        <input className="d-none" id="product-sub-img-1" type="file" name="imagenPortada" placeholder="Imagen del Producto" accept="image/*" />
                                    </div>
                                </div>
                                <button className="btn-submit" type="submit">Guardar</button>
                            </form>
                        </div>
                        <div className="overlay" id="overlay">
                            <div className="popup" id="popup">
                                <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup"><i className="fas fa-times"></i></a>
                                <h3>Cambiar foto de perfil</h3>
                                <form action="/usuarios/perfil?_method=PUT" method="post" encType="multipart/form-data">
                                    <div className="col col-5">
                                        <label className="selectImg" htmlFor="product-img">
                                            <div className="box-img">
                                                <img id="img-preview" className="img-fluid img-thumbnail imagen-height rounded" src="/img/users/" alt="" />
                                            </div>
                                        </label>
                                        <div className="form-admin__box inactivo">
                                            <input className="d-none" id="product-img" type="file" name="imagenPortada" placeholder="Imagen del Producto" accept="image/*" multiple />
                                        </div>
                                    </div>
                                    <button className="btn-submit" type="submit">Guardar</button>
                                </form>
                            </div>
                        </div>
                        <div className="content" id="content">
                        </div>
                    </div>


                </div>
            </main>
        </body>
    )
}

export default Perfil