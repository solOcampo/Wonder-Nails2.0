import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
  return (

   
    <article className="ofertas">
      <div className="cajaHome">
        <div className="caja-etiquetas">
          <span className="etiqueta">Nuevo <i className="fas fa-shopping-bag"></i></span>
          <a className="etiquetaC" href=""><i
            className="far fa-heart"></i></a>
        </div>
        <a href="/productos/detalle">
          <div className="foto-prod">
            <img src={`/assets/productos/${props.imagen}`} alt={props.imagen} className="prodImg" />
          </div>
          <div className="DatosBox">
            <h4> {props.titulo}</h4>

            <div className="card-value">
              <p className="card-discount">${props.precio - (props.precio * props.descuento / 100)}</p>
              <p className="card-price">${props.precio}</p>
            </div>

            <a href="/productos/carrito" className="comprar">Comprar</a>
          </div>
        </a>
      </div>
    </article>

  )
}

Card.propTypes = {
  titulo: PropTypes.string,
  precio: PropTypes.number,
  descuento: PropTypes.number,
  imagen: PropTypes.string,
  categoriaId: PropTypes.number
}

Card.defaultProps = {
  titulo: "prueba de producto",
  precio: 1500,
  descuento: 15,
  imagen: "default-image.png",
  categoriaId: 1
}

export default Card