import React, { useState, useEffect } from 'react'
//import { NavLink } from 'react-router-dom';
import cargando from '../../assets/productos/giphy.gif'
import imagen from '../../assets/productos/404.png'

function ProductosCopy() {
    const [isLoading, setIsLoading]= useState(false)

    const [Aparatos, setAparatos] = useState([])
    const [EsmaltadoSemipermanente, setEsmaltadoSemipermanente] = useState([])
    const [ContruccióndeUñas, setContruccióndeUñas] = useState([])
    const [Esmaltado, setEsmaltado] = useState([])
    const [Decoración, setDecoración] = useState(false)
    const [Herramientas, setHerramientas] = useState(false)
    const [Accesorios, setAccesorios] = useState(false)
    const [CuidadodeManosyPies, setCuidadodeManosyPies] = useState(false)
    const [Maquillaje, setMaquillaje] = useState(false)
    const [Esmaltes, setEsmaltes] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/api/categorias")
            .then((response) => response.json())
            .then((valores) => {
                setAparatos(valores.data[3].Aparatos)
                setEsmaltadoSemipermanente(valores.data[0].EsmaltadoSemipermanente)
                setContruccióndeUñas(valores.data[0].ContruccióndeUñas)
                setEsmaltado(valores.data[0].Esmaltado)
                setDecoración(valores.data[0].Decoración)
                setHerramientas(valores.data[0].Herramientas)
                setAccesorios(valores.data[0].Accesorios)
                setCuidadodeManosyPies(valores.data[0].CuidadodeManosyPies)
                setMaquillaje(valores.data[0].Maquillaje)
                setEsmaltes(valores.data[0].Esmaltes)

                setIsLoading(false)

                console.log(valores);

            }).catch(error => console.log(error))
    }, [isLoading])

    const handleSelected = (e) => {
        console.log(e.target.name);
        let categoria = e.target.name
        let id = e.target.value
        let producto
        switch (categoria) {
            case "Aparatos":
                producto = Aparatos.find(Aparatos => {
                    return Aparatos.id === id
                })
                setAparatos(producto)
                break;

            case "EsmaltadoSemipermanente":
                producto = EsmaltadoSemipermanente.find(EsmaltadoSemipermanente => EsmaltadoSemipermanente.id === id)
                setEsmaltadoSemipermanente(producto)
                break;

            case "ContruccióndeUñas":
                producto = ContruccióndeUñas.find(ContruccióndeUñas => ContruccióndeUñas.id === id)
                setContruccióndeUñas(producto)
                break;

            case "Esmaltado":
                producto = Esmaltado.find(Esmaltado => Esmaltado.id === id)
                setEsmaltado(producto)
                break;

            case "Decoración":
                producto = Decoración.find(Decoración => Decoración.id === id)
                setDecoración(producto)
                break;
            case "Herramientas":
                producto = Herramientas.find(Herramientas => Herramientas.id === id)
                setHerramientas(producto)
                break;
            case "Accesorios":
                producto = Accesorios.find(Accesorios => Accesorios.id === id)
                setAccesorios(producto)
                break;
            case "CuidadodeManosyPies":
                producto = CuidadodeManosyPies.find(CuidadodeManosyPies => CuidadodeManosyPies.id === id)
                setCuidadodeManosyPies(producto)
                break;
            case "Maquillaje":
                producto = Maquillaje.find(Maquillaje => Maquillaje.id === id)
                setMaquillaje(producto)
                break;
                case "Esmaltes":
                producto = Esmaltes.find(Esmaltes => Esmaltes.id === id)
                setEsmaltes(producto)
                break;

            default:
                break;
        }

        if (isLoading) {
            return (
                <div className='box-loading'>
                    <img src={cargando} alt="loading" />
                    <h2>cargando</h2>
                </div>
            )
        }
    }
    return (
        <div className="box-menu">
            <h4>Ofertas del dia</h4>
            <article className='producto'>
                <label htmlFor="Aparatos"><img src="/assets/productos/404.png" alt="Aparatos" /></label>
                <h5>{Aparatos ? Aparatos.nombre : "Aparatos"}</h5>
                <select name="Aparatos" id="Aparatos" onChange={handleSelected} >
                    <option defaultValue="" hidden>Seleccione un producto</option>
                    {Aparatos.map(Aparatos =>
                        <option value={Aparatos.id}>{Aparatos.nombre}</option>
                    )}
                </select>
            </article>

            <article className='producto'>
            <img src="/assets/productos/404.png"  alt="EsmaltadoSemipermanente" />
                <h5>{EsmaltadoSemipermanente ? EsmaltadoSemipermanente.nombre : "Esmaltado Semipermanente"}</h5>
                <select name="EsmaltadoSemipermanente" id="EsmaltadoSemipermanente" onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>
                    {EsmaltadoSemipermanente.map(Semi =>
                        <option value={Semi.id}>{Semi.nombre}</option>
                    )}
                </select>
            </article>

            <article className='producto'>
                <img src="/assets/productos/404.png"  alt="ContruccióndeUñas" />
                <h5>{ContruccióndeUñas ? ContruccióndeUñas.nombre : "Hombre"}</h5>
                <select name="ContruccióndeUñas" id="ContruccióndeUñas" onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>
                    {ContruccióndeUñas.map(ContruccióndeUñas =>
                        <option value={ContruccióndeUñas.id}>{ContruccióndeUñas.nombre}</option>
                    )}
                </select>
            </article>

            <article className='producto'>
                <img src="/assets/productos/404.png" alt="Esmaltado" />
                <h5>{Esmaltado ? Esmaltado.nombre : "Esmaltado"}</h5>
                <select name="Esmaltado" id="Esmaltado" onChange={handleSelected}>
                    <option defaultValue="" hidden>Seleccione un producto</option>
                    {Esmaltado.map(Esmaltado =>
                        <option value={Esmaltado.id}>{Esmaltado.nombre}</option>
                    )}
                </select>
            </article>

        </div>
    )
}



export default ProductosCopy