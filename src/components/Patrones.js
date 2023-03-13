import React from "react";
import Footer from "./Footer";
import Patron from './Patron'
import { Link, useNavigate } from 'react-router-dom'

let patron1 = {
    numero: 1,
    query: 'biomimetica',
    titulo: 'Biomimética'
}

let patron2 = {
    numero: 2,
    query: 'ecodiseno',
    titulo: 'Ecodiseño'
}

let patron3 = {
    numero: 3,
    query: 'recursos-inteligentes',
    titulo: 'Recursos inteligentes'
}

let patron4 = {
    numero: 4,
    query: 'codigo-abierto',
    titulo: 'Código abierto'
}

let patron5 = {
    numero: 5,
    query: 'recursos-compartidos',
    titulo: 'Recursos compartidos'
}

let patron6 = {
    numero: 6,
    query: 'biodiseño',
    titulo: 'Biodiseño'
}

let patron7 = {
    numero: 7,
    query: 'logistica-reversa',
    titulo: 'Logística reversa'
}

let patron8 = {
    numero: 8,
    query: 'simbiosis-industrial',
    titulo: 'Simbiosis industrial'
}

let patron9 = {
    numero: 9,
    query: 'reparar',
    titulo: 'Reparar'
}

let patron10 = {
    numero: 10,
    query: 'regenerar',
    titulo: 'Regenerar'
}

let patron11 = {
    numero: 11,
    query: 'intercambiar',
    titulo: 'Intercambiar'
}

let patron12 = {
    numero: 12,
    query: 'industria',
    titulo: 'Industria 4.0',
}

let patron13 = {
    numero: 13,
    query: 'comunidades-locales',
    titulo: 'Comunidades locales'
}

let patron14 = {
    numero: 14,
    query: 'producto-como-servicio',
    titulo: 'Producto como servicio'
}

let patron15 = {
    numero: 15,
    query: 'virtualizar',
    titulo: 'Virtualizar'
}

let patron16 = {
    numero: 16,
    query: 'remanufacturar',
    titulo: 'Re - manufacturar',
}

let patron17 = {
    numero: 17,
    query: 'reciclar',
    titulo: 'Reciclar'
}


let patrones = [patron1, patron2, patron3, patron4, patron5, patron6, patron7, patron8, patron9, patron10, patron11, patron12, patron13, patron14, patron15, patron16, patron17]

function Patrones(props) {

    const navigate = useNavigate()

    return (
        <>
        <main>

            <div className="patrones">

                <Link className="flecha-anterior" id="patrones" onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
                
                <div className="text">
                        <h1>Patrones</h1>
                        <p>La metodología utilizada propone el uso de patrones para el diseño de modelos de negocios circulares. Estos se inspiran en aspectos de la estrategia Resolve (regenerar, compartir, optimizar, circularizar, virtualizar e intercambiar), junto a las 9 R de transición de una economía lineal a una circular (Recuperar, reciclar, reconvertir, remanufacturar, reacondicionar, reparar, reusar, reducir, repensar, rechazar). Son estrategias de circularidad que se repiten al observar modelos de negocios circulares.</p>
                </div>

                <div className="seccion-patrones">

                        {
                            patrones.map((patron,i) => {
                                return <Patron {...patron} key={patron+i} />
                            })
                        }


                 </div>
                
            </div>

            <Footer/>
        </main>
        </>
    )
}

export default Patrones