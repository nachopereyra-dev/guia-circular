import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'

let oportunidad1 = {
    id: 1,
    query: 'oportunidad-1',
    nombre: 'Oportunidad 1',
    contenido: 'contenido contenido contenido'
}

let oportunidades = [oportunidad1]

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