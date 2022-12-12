import React from "react";
import { Link } from 'react-router-dom'
import Empresa from './Empresa'
import Footer from "./Footer";

let empresa1 = {
    nombre: 'empresa 1'
}

let empresa2 = {
    nombre: 'empresa 2'
}

let empresa3 = {
    nombre: 'empresa 3'
}

let empresa4 = {
    nombre: 'empresa 4'
}

let empresa5 = {
    nombre: 'empresa 5'
}

let empresa6 = {
    nombre: 'empresa 6'
}

let empresa7 = {
    nombre: 'empresa 7'
}

let empresa8 = {
    nombre: 'empresa 8'
}

let empresa9 = {
    nombre: 'empresa 9'
}

let empresas = [empresa1, empresa2, empresa3, empresa4, empresa5, empresa6, empresa7, empresa8, empresa9]

function Empresas() {
    return (
        <>
        <main>

            <div className="empresas">

                <div className="flecha-anterior">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>

                <div className="text">

                    <h1>Empresas circulares en Maldonado</h1>

                    <p>Lorem ipsum dolor sit amet consectetur. Purus gravida pharetra blandit diam commodo vulputate id. Suscipit mi leo sed nam mattis. Mattis mi tortor posuere turpis. Tristique integer amet tempor quisque.  Purus gravida pharetra blandit diam commodo vulputate id. Suscipit mi leo sed nam mattis. Mattis mi tortor posuere turpis.</p>
                
                </div>

                <div className="seccion-empresas">

                        {
                            empresas.map((empresa,i) => {
                                return <Empresa {...empresa} key={empresa+i} />
                            })
                        }

                </div>

            </div>

        <Footer/>
        </main>
        </>
    )
}

export default Empresas