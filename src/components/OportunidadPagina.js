import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'

let oportunidad1 = {
    id: 1,
    query: 'oportunidad-productos-organicos',
    nombre: 'Orgánicos',
    contenido: 'Aquí podrás encontrar lista de empresas que generan residuos de origen vegetal para que puedas aprovecharlas.'
}

let oportunidad2 = {
    id: 2,
    query: 'oportunidad-productos-plasticos',
    nombre: 'Plásticos',
    contenido: 'Aquí podrás encontrar empresas que generan  residuos plásticos según su clasificación que puedan serte útiles en tu proceso productivo.'
}

let oportunidad3 = {
    id: 3,
    query: 'oportunidad-productos-textiles',
    nombre: 'Textiles',
    contenido: 'En esta sección descubrí dónde buscar descartes textiles para darle una oportunidad en tu ciclo productivo.'
}

let oportunidad4 = {
    id: 4,
    query: 'oportunidad-productos-madera',
    nombre: 'Madera',
    contenido: 'En esta sección te presentamos las empresas que generan descartes en madera que puedan ser aprovechados.'
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