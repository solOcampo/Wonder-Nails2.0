import * as React from 'react';


export default function FormEdit(){
  
  return (    
    <body className="crear-editar listar">
    <main className="crear">
      <ul className="ul">
        <li className="crumb li"><a href="/">Home</a></li>
        <li className="divider li">{' > '}</li>
        <li className="crumb-active li" aria-current="page"><a href="/admin">Administrador</a></li>
        <li className="divider li">{' > '}</li>
        <li className="crumb-active li" aria-current="page"><a href="/admin/listar">Listar Productos</a></li>
        <li className="divider li">{' > '}</li>
        <li className="crumb-active li" aria-current="page">Editar Producto</li>
      </ul>
      <h1>Editando un producto</h1>
      <div className="divForm">
      <form action="/admin/editar/<%=producto.id%>?_method=PUT"  method="post" enctype="multipart/form-data">
          <section>
            <div className="form-floating">
              <label htmlFor="nombre">Nombre del producto</label>
              <input type="text" className="form-control" name="nombre" id="nombre" defaultValue={'Nombre'}
                placeholder="Nombre del producto"/>

              <i className="fas fa-exclamation-circle failure-icon"></i>
              <i className="far fa-check-circle success-icon"></i>
              <p className="span text-danger" id="nombreError">
                {/* <%= locals.errors && errors.nombre ? errors.nombre.msg : null %> */}
              </p>
              <small id="failure"></small>
              <small id="success"></small>
            </div>
            <div className="form-floating">
              <label htmlFor="marca">Marca</label>
              <select className="form-select" name="marca" id="marca"
                aria-label="Floating label select example">
                <option hidden defaultValue={''}>Selecciona una opcion</option>
                <option defaultValue={1}>Wonder Nails</option>
                <option defaultValue={2}>Anush</option>
                <option defaultValue={3}>Truya</option>
                <option defaultValue={4}>Up</option>
              </select>
            </div>
            <div className="form-floating">
              <label htmlFor="categoria">Categoría</label>
              <select className="form-select" name="categoria" id="categoria"
                aria-label="Floating label select example">
                <option hidden defaultValue={''}>Selecciona una opcion</option>
                <option defaultValue={1}>Aparatos</option>
                <option defaultValue={2}>Esmaltado Semipermanente</option>
                <option defaultValue={3}>Contrucción de Uñas</option>
                <option defaultValue={4}>Esmaltado</option>
                <option defaultValue={5}>Decoración</option>
              </select>
            </div>
            <div className="form-floating">
              <label htmlFor="marca">Marca</label>
              <select className="form-select" name="marca" id="marca"
                aria-label="Floating label select example">
                <option hidden defaultValue="">Selecciona una opcion</option>
                <option defaultValue={1}>Wonder Nails</option>
                <option defaultValue={2}>Anush</option>
                <option defaultValue={3}>Truya</option>
                <option defaultValue={4}>Up</option>
              </select>
            </div>
            <div className="form-floating">
              <label htmlFor="categoria">Subcategoría</label>
              <select className="form-select" name="estado" id="estado"
                aria-label="Floating label select example">
                <option hidden defaultValue="">Selecciona una opcion</option>
                <option defaultValue={1}>Nuevos</option>
                <option defaultValue={2}>Ofertas </option>
                <option defaultValue={3}>Favoritos </option>
              </select>
            </div>
            <div className="form-floating">
              <label htmlFor="color">Color</label>
              <input type="color" className="form-control" name="color" id="color" list="color" />
              <datalist id="colores">

                <option defaultValue="#00ffff" />

                <option defaultValue="#ff00ff" />

                <option defaultValue="#ffff00" />

                <option defaultValue="#ffaa00" />

              </datalist>

              <div className="form-floating">
                <label htmlFor="precio">Precio</label>
                <input type="number" className="form-control" name="precio" id="precio" min="1"
                  defaultValue={'precio'} placeholder="$" />

              </div>
              <div className="form-floating">
                <label htmlFor="descuento">Descuento</label>
                <input type="number" className="form-control" name="descuento" id="descuento" min="0" max="99"
                  defaultValue={''}
                  placeholder="Descuento" />

              </div>
              <div className="form-floating">
                <label htmlFor="stock">Stock</label>
                <input type="number" className="form-control" name="stock" id="stock" min="0"
                  placeholder="Stock" />

              </div>
              <div className="form-floating">
                <label htmlFor="descripcion">Descripción</label>
                <input name="descripcion" id="descripcion" cols="300" rows="300" className="form-control"
                  placeholder="Descripcion del producto"/>

              </div>
              <div className="mb-3">

                <section className="img-product">

                  <div className="container">
                    <div className="row">

                      <div className="col col-5">
                        <label className="custom-file-upload" htmlFor="product-img">
                          <img id="img-preview" className="img-fluid img-thumbnail imagen-height rounded" src="/assets/productos/default-image.png" alt="" />
                          <div className="imgHover">
                            <p className="text-center">Selecionar Imagen 1</p>
                          </div>
                        </label>
                        <div className="form-admin__box inactivo">
                          <input className="d-none" id="product-img" type="file" name="imagen"
                            placeholder="Imagen del Producto" accept="image/*" />
                        </div>
                      </div>
                      <div className="col col-5">
                        <label className="custom-file-upload" htmlFor="product-img">
                          <img id="img-preview" className="img-fluid img-thumbnail imagen-height rounded" src="/assets/productos/default-image.png" alt="" />
                          <div className="imgHover">
                            <p className="text-center">Selecionar Imagen 2</p>
                          </div>
                        </label>
                        <div className="form-admin__box inactivo">
                          <input className="d-none" id="product-img" type="file" name="imagen"
                            placeholder="Imagen del Producto" accept="image/*" />
                        </div>
                      </div>
                      <div className="col col-5">
                        <label className="custom-file-upload" htmlFor="product-img">
                          <img id="img-preview" className="img-fluid img-thumbnail imagen-height rounded" src="/assets/productos/default-image.png" alt="" />
                          <div className="imgHover">
                            <p className="text-center">Selecionar Imagen 3</p>
                          </div>
                        </label>
                        <div className="form-admin__box inactivo">
                          <input className="d-none" id="product-img" type="file" name="imagen"
                            placeholder="Imagen del Producto" accept="image/*" />
                        </div>
                      </div>
                      <div className="col col-5">
                        <label className="custom-file-upload" htmlFor="product-img">
                          <img id="img-preview" className="img-fluid img-thumbnail imagen-height rounded" src="/assets/productos/default-image.png" alt="" />
                          <div className="imgHover">
                            <p className="text-center">Selecionar Imagen 4</p>
                          </div>
                        </label>
                        <div className="form-admin__box inactivo">
                          <input className="d-none" id="product-img" type="file" name="imagen"
                            placeholder="Imagen del Producto" accept="image/*" />
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="box-buttons">
                    <div className="button borrar">
                      <button type="reset">Borrar</button>
                    </div>
                    <div className="button crear">
                      <button className="btn btn-outline-success" id="btn-submit" type="submit">Actualizar</button>
                    </div>
                  </div>

                </section>
              </div>
            </div>
          </section>
        </form>
      </div>
    </main>
  </body>
  )}