import React from 'react'
import '../productCarrusel/productCarrusel.css'
function ProductCarrusel() {
    return (
      
        <div className="contenedor-all">
        <input type="radio" name="imagen-slide" id="1" hidden/>
        <input type="radio" name="imagen-slide" id="2" hidden/>
        <input type="radio" name="imagen-slide" id="3" hidden/>
        <input type="radio" name="imagen-slide" id="4" hidden/>
      <div className="slide">
        <div className="img-slide">
         <img src="/assets/home/carrousel/BANNER-3.jpg" alt=""/>
        </div>
        <div className="img-slide">
          <img src="/assets/home/carrousel/BANNER-1.jpg" alt=""/>
        </div>
        <div className="img-slide">
         <img src="/assets/home/carrousel/BANNER-2.jpg" alt=""/>
       </div>
        <div className="img-slide">
          <img src="/assets/home/carrousel/BANNER-4.gif" alt=""/>
        </div>
      </div>
     </div>

    )
}

export default ProductCarrusel