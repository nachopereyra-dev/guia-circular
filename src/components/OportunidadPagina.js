import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'

let oportunidad1 = {
    id: 1,
    query: 'oportunidad-productos-organicos',
    nombre: 'Orgánicos',
    contenido: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
}

let oportunidad2 = {
    id: 1,
    query: 'oportunidad-productos-plasticos',
    nombre: 'Plásticos',
    contenido: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
}

let oportunidad3 = {
    id: 1,
    query: 'oportunidad-productos-textiles',
    nombre: 'Textiles',
    contenido: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
}

let oportunidad4 = {
    id: 1,
    query: 'oportunidad-productos-madera',
    nombre: 'Madera',
    contenido: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.'
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