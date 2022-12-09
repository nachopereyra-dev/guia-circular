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
    return (
        <>
        <div className="home-second">
        
            <div className="text">
                <h1>Patrones</h1>
            </div>

            <div className="seccion-patrones">

                {
                    patronesTrabajados.map((patron,i) => {
                        return <Patron {...patron} key={patron+i} />
                    })
                }

                <Link className="ver-mas-patrones">
                    <p className="texto-ver-mas">Ver +</p>
                </Link>

                <div className="flecha-home-second">
                    <i class="fa-solid fa-arrow-down"></i>
                </div>

            </div>
            
        </div>
        </>
    )
}

export default HomeSecond