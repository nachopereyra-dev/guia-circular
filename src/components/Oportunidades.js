import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import Footer from "./Footer";
import Oportunidad from './Oportunidad'

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

function Oportunidades() {

    const navigate = useNavigate()

    return (
        <>
            <main>

                <div className="oportunidades">

                    <Link className="flecha-anterior" id="oportunidades" onClick={() => navigate(-1)}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link>

                    <div className="text">

                        <h1>Oportunidades circulares</h1>

                        <p>Información general sobre oportunidades circulares.</p>
                    
                    </div>

                    <div className="seccion-oportunidades">

                        {
                            oportunidades.map((oportunidad, i) => {
                                return <Oportunidad {...oportunidad} key={oportunidad+i} />
                            })
                        }

                    </div>

                </div>

            <Footer />
            </main>
        </>
    )
}

export default Oportunidades