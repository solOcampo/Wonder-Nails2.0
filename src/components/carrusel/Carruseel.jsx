import React from 'react'

import '../carrusel/carrusel.css'
import img1 from '../../assets/Home/img-instagram-1.jpg'
import img2 from '../../assets/Home/img-instagram-2.jpg'
import img3 from '../../assets/Home/img-instagram-3.jpg'
import img4 from '../../assets/Home/img-instagram-4.jpg'

function Carruseel() {
    return (
        <body className='carrusel'>
            <section>
                <button className='button'><i class="fas fa-pause-circle"></i></button>
                <article>
                    <div>
                        <ul>
                            <li><img src={img1} /></li>
                            <li><img src={img2} /></li>
                            <li><img src={img3} /></li>
                            <li><img src={img4} /></li>
                        </ul>
                    </div>
                   
                </article>
            </section>
        </body>
    )
}

export default Carruseel