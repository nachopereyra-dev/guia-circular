import React from "react";
import { Link } from "react-router-dom";
import Patron from './Patron'

let patron2 = {
    numero: 2,
    titulo: 'Ecodiseño',
}

let patron3 = {
    numero: 3,
    titulo: 'Recursos inteligentes'
}

let patron5 = {
    numero: 5,
    titulo: 'Recursos compartidos'
}

let patron8 = {
    numero: 8,
    titulo: 'Simbiosis industrial'
}

let patron11 = {
    numero: 11,
    titulo: 'Intercambiar'
}

let patron12 = {
    numero: 12,
    titulo: 'Industria 4.0'
}

let patron13 = {
    numero: 13,
    titulo: 'Comunidades locales'
}

let patronesTrabajados = [patron2, patron3, patron5, patron8, patron11, patron12, patron13]


function HomeSecond() {

    const onClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'})
      }

    return (
        <>
        <div className="home-second" id="home-patrones">
        
            <div className="text">
                <h1>Patrones</h1>
                <p>La metodología utilizada propone el uso de patrones para el diseño de modelos de negocios circulares. Estos se inspiran en aspectos de la estrategia Resolve (regenerar, compartir, optimizar, circularizar, virtualizar e intercambiar), junto a las 9 R de transición de una economía lineal a una circular (Recuperar, reciclar, reconvertir, remanufacturar, reacondicionar, reparar, reusar, reducir, repensar, rechazar). Son estrategias de circularidad que se repiten al observar modelos de negocios circulares.</p>
            </div>

            <div className="seccion-patrones">

                {
                    patronesTrabajados.map((patron,i) => {
                        return <Patron {...patron} key={patron+i} />
                    })
                }

                <Link to={'./patrones'} className="ver-mas-patrones" onClick={() => onClick('patrones')}>
                    <p className="texto-ver-mas">Ver +</p>
                </Link>

                <Link className="flecha-home-second" onClick={() => onClick('home-empresas')}>
                    <i class="fa-solid fa-arrow-down"></i>
                </Link>

            </div>
            
        </div>
        </>
    )
}

export default HomeSecond