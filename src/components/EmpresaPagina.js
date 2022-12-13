import React from "react";
import { useParams } from 'react-router-dom'
import Footer from './Footer'

let empresa1 = {
    id: 1,
    query: 'empresa-1',
    nombre: 'empresa 1'
}

let empresa2 = {
    id: 2,
    query: 'empresa-2',
    nombre: 'empresa 2'
}

let empresa3 = {
    id: 3,
    query: 'empresa-3',
    nombre: 'empresa 3'
}

let empresa4 = {
    id: 4,
    query: 'empresa-4',
    nombre: 'empresa 4'
}

let empresa5 = {
    id: 5,
    query: 'empresa-5',
    nombre: 'empresa 5'
}

let empresa6 = {
    id: 6,
    query: 'empresa-6',
    nombre: 'empresa 6'
}

let empresa7 = {
    id: 7,
    query: 'empresa-7',
    nombre: 'empresa 7'
}

let empresa8 = {
    id: 8,
    query: 'empresa-8',
    nombre: 'empresa 8'
}

let empresa9 = {
    id: 9,
    query: 'empresa-9',
    nombre: 'empresa 9'
}

let empresas = [empresa1, empresa2, empresa3, empresa4, empresa5, empresa6, empresa7, empresa8, empresa9]


function EmpresaPagina(props) {

    const params = useParams()
    
    const empresa = empresas.find(empresa => empresa.query == params.nombre)
    console.log(empresa)

    return (
        <>
            <main>
                <div className="empresa-pagina">

                <div className="flecha-anterior">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>

                <h2>{empresa.nombre}</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Purus gravida pharetra blandit diam commodo vulputate id. Suscipit mi leo sed nam mattis. Mattis mi tortor posuere turpis. Tristique integer amet tempor quisque.  Purus gravida pharetra blandit diam commodo vulputate id. Suscipit mi leo sed nam mattis. Mattis mi tortor posuere turpis.</p>

                </div>

                <Footer/>
            </main>
        </>
    )
}

export default EmpresaPagina