import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Lista from './Listar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
//import cargando from '../../assets/productos/spin.gif'
//import { styled } from '@mui/material/styles';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (

      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  
function CreacionProducto() {

  /* const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));  */
    

        const [categorias, setCategorias] = useState([])
        const [loading,setLoading] = useState(true)
        const [value, setValue] = useState(1);
        const [secondary, setSecondary] = useState(false);

        useEffect(() => {
          setLoading(true)
          fetch("http://localhost:3000/api/categorias")
          .then((response) => response.json())
          .then((valores) => {
            /* console.log(valores) */
            setCategorias(valores.data);
            setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
      .catch(error => console.log(error))
  }, [loading])
        
        console.log(categorias)
       
        const handleChange = (event, newValue) => {
          setValue(newValue);
        }

  return (

    <div className='crearProd'>
        
    <Box sx={{ width: '98%', margin: '10px', bgcolor:'white' }} className="boxes">

      <Box>       
      <Tabs value={value} onChange={handleChange} textColor="secondary"
  indicatorColor="secondary" centered>
        <Tab label="Aparatos" />
        <Tab label="Esmaltado Semipermanente" />
        <Tab label="Contrucción de Uñas" />
        <Tab label="Esmaltado" />
        <Tab label="Decoración" />
        <Tab label="Herramientas" />
        <Tab label="Accesorios" />
        <Tab label="Cuidado de Manos y Pies" />
        <Tab label="Maquillaje" />
        <Tab label="Esmaltes" />

      </Tabs>      
      </Box>

      {/* espacio check para mostrar o no descrp sec */}
      <FormControlLabel
                control={
                  <Checkbox
                    checked={secondary}
                    onChange={(event) => setSecondary(event.target.checked)}
                  />
                }
                label="Mostrar descripcion" 
              />
    
      <TabPanel value={value} index={0}>
        <h1>Aparatos</h1>
        <NavLink to={'/admin/crear/producto'}>
        <Button  variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>          
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.Aparatos.map(producto =>
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagenes[0].nombre}
                nombre={producto.nombre}
                /* categoria='productos' */
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink>  
          )}     
        </div>      
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h1>Favoritos</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
            <p>Cargando...</p>
            :
          categorias.EsmaltadoSemipermanente.map(producto=>  
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagen}
                nombre={producto.nombre}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasid}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink> 
          )   }     
        </div>      
      </TabPanel>

      <TabPanel value={value} index={2}>
        <h1>Ofertas</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button  variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.ContruccióndeUñas.map(producto => 
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagen}
                nombre={producto.nombre}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasid}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink> 
          )   }     
        </div>      
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h1>Ofertas</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button  variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.Esmaltado.map(producto => 
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagen}
                nombre={producto.nombre}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink> 
          )   }     
        </div>      
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h1>Ofertas</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button  variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.Decoración.map(producto => 
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagen}
                nombre={producto.nombre}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink> 
          )   }     
        </div>      
      </TabPanel>
      <TabPanel value={value} index={5}>
        <h1>Ofertas</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button  variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>
        
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.Herramientas.map(producto => 
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagen}
                nombre={producto.nombre}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink> 
          )   }     
        </div>      
      </TabPanel>
      <TabPanel value={value} index={6}>
        <h1>Ofertas</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button  variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.Accesorios.map(producto => 
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagen}
                nombre={producto.nombre}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink> 
          )   }     
        </div>      
      </TabPanel>
      <TabPanel value={value} index={7}>
        <h1>Ofertas</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button  variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.CuidadodeManosyPies.map(producto => 
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagen}
                nombre={producto.nombre}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink> 
          )   }     
        </div>      
      </TabPanel>
      <TabPanel value={value} index={8}>
        <h1>Ofertas</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button  variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.Maquillaje.map(producto => 
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagen}
                nombre={producto.nombre}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink> 
          )   }     
        </div>      
      </TabPanel>
      <TabPanel value={value} index={9}>
        <h1>Ofertas</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button  variant="outlined" color="secondary">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.Esmaltes.map(producto => 
            <NavLink to={`/admin/editar/producto/${producto.id}`}>             
                <Lista
                id={producto.id}
                imagen={producto.imagen}
                nombre={producto.nombre}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                /> 
                </NavLink> 
          )   }     
        </div>      
      </TabPanel>
    
    </Box>
    </div>
  )
}

export default CreacionProducto