import React,{useState} from 'react'
import PropTypes from 'prop-types';
import Favoritos from '../../components/productos/Favoritos';
import Novedades from '../../components/productos/Novedades';
import Ofertas from '../../components/productos/Ofertas'

function Productos(props) {

const [productos,setProductos] = useState([])
const [Favoritos,setFavoritos]=useState('Favoritos')
const [Novedades,setNovedades]=useState('Novedades')
const [Ofertas,setOfertas]=useState('Oferta')


/* probando handleclick */
const handleClick = (e) => {
        
  e.preventDefault()
  if (e.target.classList.value === 'link-productos') {
      console.log('hiciste Click');
      e.target.classList.value = 'Nuevo'
      setProductos(Novedades)
      setFavoritos('Favoritos')
  }else{
      console.log('hiciste Click');
      setNovedades(Ofertas)
      e.target.classList.value = 'Ofertas'
      setFavoritos('Favoritos')
  }

/* setProductos(producto)
setMostrar('ver productos')
const seteando =() =>{
  setProductos(productos)
}
seteando() */


/* const handleProductos =async()=>{
  let resultado=await productos
  setProductos(resultado)
} */

  return (
  <div>
    <main>

     <h1 className="productsPage">Productos</h1>
     </main>
     </div>
    )
}
}


export default Productos