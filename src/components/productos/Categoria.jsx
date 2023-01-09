import React from 'react'
import PropTypes from 'prop-types'

function Categoria({categoria,imagen,nombre,alt}) {
  return (
    <div>
        
        <div className='categoria'>
            <label htmlFor={categoria}><img src={`/assets/productos/${imagen}`}  alt="{props.alt}"/></label>
            <p>{categoria}</p>
            <input type="checkbox" name={categoria} id={categoria}/>
        </div>

    </div>
  )
}

Categoria.propTypes = {
    id: PropTypes.number,
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    alt: PropTypes.string
}
Categoria.defaultProps = {
    id:0,
    imagen:"default-image-png",
    nombre:"producto no encontrado",
    alt:"busque mejor"
}

export default Categoria