import React from 'react'
import PropTypes from 'prop-types'
import Card from '../partials/Card'

function Novedades(props) {

    const imagenes = `url('/assets/Products/${props.imagen}')`

  return (
    <div>
 
    <article className='Novedades'>
      <Card>
      <div className='profile-picture' style={{backgroundImage : imagenes}} >
            {/* <img src={`/assets/productos/${props.imagen}`} alt={props.alt} /> */}
        </div>
        <h2>{props.nombre}</h2>
      </Card>
    </article>

    </div>
  )
}

Novedades.propTypes= {
    id: PropTypes.number,  
    nombre: PropTypes.string,
    categoria: PropTypes.number,
    subcategoria: PropTypes.number,
    precio: PropTypes.number,
    descuento: PropTypes.number, 
    stock: PropTypes.number,
    descripcion:PropTypes.string,    
    imagen: PropTypes.string,
    alt: PropTypes.string
  }
  Novedades.defaultProps= {
    id: 0,
    nombre: "imagen x defecto",
    categoria: 1,
    subcategoria: 2,
    precio: 100,
    descuento: 20,
    stock: 1,
    descripcion:"default",    
    imagen: "default-image.png",
    alt: "no se encontro el producto"
  }
  

Novedades.propTypes = {}

export default Novedades