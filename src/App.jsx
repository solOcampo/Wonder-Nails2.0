import { BrowserRouter, Route, Routes } from "react-router-dom";
/* partials */
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Main from './components/home/Main';


/* admin */
import Admin from "./components/admin/Admin";
import CreacionProducto from "./components/admin/CreacionProducto";
import Form from "./components/admin/Form"
import FormEdit from "./components/admin/FormEdit"
import Lista from './components/admin/Listar'

/* detalle */
import Detalle from "./components/productos/Detalle";


/* productos */
import Nuevos from "./components/productos/Novedades";
import Favoritos from "./components/productos/Favoritos";
import Ofertas from "./components/productos/Ofertas";
import Products from "./components/productos/Products";

// * extras */
import Carrito from "./components/Carrito";
import Perfil from "./components/usuarios/Perfil";


/* styles */
import './styles/styles.css';

function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Header />


        <Routes>
          {/* Home*/}
          <Route path="/" element={<Main />} />


          {/* admin */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/listar" element={<Lista/>}/>
          <Route path="/admin/crear/:categoria" element={<Form />} />
          <Route path='/admin/crear' element={<CreacionProducto />} />
          <Route path='/admin/editar' element={<FormEdit />} />

          {/* productos */}
          <Route path='/productos/nuevos' element={<Nuevos />} />
          <Route path='/productos/favoritos' element={<Favoritos />} />
          <Route path='/productos/ofertas' element={<Ofertas />} />

          {/* carrito */}
          <Route path='/productos/carrito' element={<Carrito />} />

          {/* productos */}
          <Route path='/productos' element={<Products />} />

          {/* detalle */}
          <Route path='/productos/detalle' element={<Detalle />} />
          

          {/* perfil */}
          <Route path='/usuarios/perfil' element={<Perfil />} />



        </Routes>

        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;