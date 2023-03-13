import React from "react";
import Empresa from './Empresa'
import Footer from "./Footer";
import { Link, useNavigate } from 'react-router-dom'

let empresa1 = {
    id: 1,
    query: 'empresa-1',
    nombre: 'Plasticoin',
    etiqueta: 'Reciclaje - Comunidades locales'
}

let empresa2 = {
    id: 2,
    query: 'empresa-2',
    nombre: 'Abito',
    etiqueta: 'Reciclaje'
}

let empresa3 = {
    id: 3,
    query: 'empresa-3',
    nombre: 'Werba',
    etiqueta: 'Reciclaje'
}

let empresa4 = {
    id: 4,
    query: 'empresa-4',
    nombre: 'Vitanna',
    etiqueta: 'Reciclaje - Ecodiseño'
}

let empresa5 = {
    id: 5,
    query: 'empresa-5',
    nombre: 'Mare',
    etiqueta: 'Ecodiseño'
}

let empresa6 = {
    id: 6,
    query: 'empresa-6',
    nombre: 'Mutta',
    etiqueta: 'Ecodiseño'
}

let empresa7 = {
    id: 7,
    query: 'empresa-7',
    nombre: 'Wirapita',
    etiqueta: 'Biodiseño'
}

let empresa8 = {
    id: 8,
    query: 'empresa-8',
    nombre: 'Autóctona',
    etiqueta: 'Ecodiseño'
}

let empresa9 = {
    id: 9,
    query: 'empresa-9',
    nombre: 'Arre arquitectura',
    etiqueta: 'Ecodiseño'
}

let empresa10 = {
    id: 10,
    query: 'empresa-10',
    nombre: 'Piel de papel',
    etiqueta: 'Ecodiseño'
}

let empresa11 = {
    id: 11,
    query: 'empresa-11',
    nombre: '1000 razones',
    etiqueta: 'Producto como servicio'
}

let empresa12 = {
    id: 12,
    query: 'empresa-12',
    nombre: 'Lam Arte Textil',
    etiqueta: 'Ecodiseño'
}

let empresa13 = {
    id: 13,
    query: 'empresa-13',
    nombre: 'Sellin',
    etiqueta: 'Comunidades locales'
}

let empresa14 = {
    id: 14,
    query: 'empresa-14',
    nombre: 'Resur',
    etiqueta: 'Comunidades locales - Ecodiseño'
}

let empresas = [empresa1, empresa2, empresa3, empresa4, empresa5, empresa6, empresa7, empresa8, empresa9, empresa10, empresa11, empresa12, empresa13, empresa14]

function Empresas(props) {

    const navigate = useNavigate()

    return (
        <>
        <main>

            <div className="empresas">

                <Link className="flecha-anterior" id="empresas" onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>

                <div className="text">

                    <h1>Empresas circulares en Maldonado</h1>

                    <p>Información general de empresas circulares o en procedimiento de ser circulares.</p>
                
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