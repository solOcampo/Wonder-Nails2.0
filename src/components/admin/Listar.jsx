import React from 'react'

import axios from 'axios';
import Swal from 'sweetalert2'
import Table from 'react-bootstrap/Table';



function Lista(props) {

  /* const navigate = useNavigate(); */

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estas seguro de querer eliminar este producto?',
      text: "Esta accion es Irreversible",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Elimina todo!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/productos/admin/destroy/${props.id}?categoria=${props.categoria}`)
          .then(productoEliminado => {
            Swal.fire(
              'Producto eliminado!',
              `${props.nombre}.`,
              'success'
            )
            window.location.reload(true);
          })
      }
    })
  }

  return (

    <body className="listar">
  
      <main>
      <ul className="ul">
          <li className="crumb li"><a href="/">Home</a></li>
          <li className="divider li">{' > '}</li>
          <li className="crumb-active li" aria-current="page"><a href="/admin">Administrador</a></li>
          <li className="divider li">{' > '}</li>
          <li className="crumb-active li" aria-current="page"><a href="/admin/listar">Listar Productos</a></li>
        </ul>
        <h1>Admin</h1>
        <a href="/admin/crear">
          <button type="button" className="btn btn-light">Crear producto</button>
        </a>
        <Table responsive>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Marca</th>
                <th scope="col">Nombre</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Precio</th>
                <th scope="col">Descuento</th>
                <th scope="col">stock</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><a href="/admin/editar/ ">
                  producto.id
                </a></th>
                <td><a href="/admin/editar/ producto.id">
                  producto.marca.nombre
                </a></td>
                <td><a href="/admin/editar/ producto.id">
                  producto.nombre
                </a></td>
                <td colSpan={"1"}><a href="/admin/editar/ producto.id">
                  producto.descripcion
                </a></td>
                <td><a href="/admin/editar/ producto.id ">
                  producto.precio
                </a></td>
                <td><a href="/admin/editar/ producto.id ">
                  producto.descuento
                </a></td>
                <td><a href="/admin/editar/ producto.id %> ">
                  producto.stock
                </a></td>

                <td>
                  <div>
                    <a href="/admin/editar/ producto.id%>">
                      <button type="button" className="btn btn-outline-success"><i
                        className="fas fa-edit"></i></button>
                    </a>
                    <form className="delete" action="/admin/destroy/ producto.id?_method=DELETE " method="POST">
                      <button type="submit" className="btn btn-outline-danger"><i
                        className="fas fa-trash-alt"></i></button>
                    </form>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
      </main>

    </body>


  )
}

export default Lista
