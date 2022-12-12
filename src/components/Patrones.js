import React from "react";
import { Link } from 'react-router-dom'
import Footer from "./Footer";
import Patron from './Patron'

let patron1 = {
    numero: 1,
    titulo: 'Biomimética',
}

let patron2 = {
    numero: 2,
    titulo: 'Ecodiseño',
}

let patron3 = {
    numero: 3,
    titulo: 'Recursos inteligentes'
}

let patron4 = {
    numero: 4,
    titulo: 'Código abierto',
}

let patron5 = {
    numero: 5,
    titulo: 'Recursos compartidos'
}

let patron6 = {
    numero: 6,
    titulo: 'Biodiseño',
}

let patron7 = {
    numero: 7,
    titulo: 'Logística reversa',
}

let patron8 = {
    numero: 8,
    titulo: 'Simbiosis industrial'
}

let patron9 = {
    numero: 9,
    titulo: 'Reparar',
}

let patron10 = {
    numero: 10,
    titulo: 'Regenerar',
}

let patron11 = {
    numero: 11,
    titulo: 'Intercambiar'
}

let patron12 = {
    numero: 12,
    titulo: 'Industria',
    tituloSegundo: '4.0'
}

let patron13 = {
    numero: 13,
    titulo: 'Comunidades locales'
}

let patron14 = {
    numero: 14,
    titulo: 'Producto como servicio',
}

let patron15 = {
    numero: 15,
    titulo: 'Virtualizar',
}

let patron16 = {
    numero: 16,
    titulo: 'Re - manufacturar',
    tituloSegundo: ' '
}

let patron17 = {
    numero: 17,
    titulo: 'Reciclar',
}

let patrones = [patron1, patron2, patron3, patron4, patron5, patron6, patron7, patron8, patron9, patron10, patron11, patron12, patron13, patron14, patron15, patron16, patron17]

function Patrones() {
    return (
        <>
        <main>

            <div className="patrones">

                <div className="flecha-anterior">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                
                <div className="text">
                        <h1>Patrones</h1>
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