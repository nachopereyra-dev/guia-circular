import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'

let oportunidad1 = {
    id: 1,
    query: 'oportunidad-productos-organicos',
    nombre: 'Orgánicos',
    contenido: 'contenido contenido contenido'
}

let oportunidad2 = {
    id: 1,
    query: 'oportunidad-productos-plasticos',
    nombre: 'Plásticos',
    contenido: 'contenido contenido contenido'
}

let oportunidad3 = {
    id: 1,
    query: 'oportunidad-productos-textiles',
    nombre: 'Textiles',
    contenido: 'contenido contenido contenido'
}

let oportunidad4 = {
    id: 1,
    query: 'oportunidad-productos-madera',
    nombre: 'Madera',
    contenido: 'contenido contenido contenido'
}

let oportunidades = [oportunidad1, oportunidad2, oportunidad3, oportunidad4]

function OportunidadPagina(props) {

    const navigate = useNavigate()
    const params = useParams()
    
    const oportunidad = oportunidades.find(oportunidad => oportunidad.query === params.nombre)

    return (
        <>
            <main>
                <div className="oportunidad-pagina">

                <Link className="flecha-anterior" onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>

                <h2>{oportunidad.nombre}</h2>
                <p className="descripcion-oportunidad">{oportunidad.contenido}</p>

                </div>

                <Footer/>
            </main>
        </>
    )
}

export default OportunidadPagina