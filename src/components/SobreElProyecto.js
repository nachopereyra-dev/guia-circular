import React from "react";
import Item from './ItemSobreProyecto'
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

let item1 = {
    nombre: 'Título',
    descripcion: 'Lorem ipsum dolor sit amet consectetur. Sagittis faucibus  elementum leo diam risus  dapibus tincidunt.'
}

let item2 = {
    nombre: 'Título',
    descripcion: 'Lorem ipsum dolor sit amet consectetur. Sagittis faucibus  elementum leo diam risus  dapibus tincidunt.'
}

let item3 = {
    nombre: 'Título',
    descripcion: 'Lorem ipsum dolor sit amet consectetur. Sagittis faucibus  elementum leo diam risus  dapibus tincidunt.'
}

let item4 = {
    nombre: 'Título',
    descripcion: 'Lorem ipsum dolor sit amet consectetur. Sagittis faucibus  elementum leo diam risus  dapibus tincidunt.'
}

let item5 = {
    nombre: 'Título',
    descripcion: 'Lorem ipsum dolor sit amet consectetur. Sagittis faucibus  elementum leo diam risus  dapibus tincidunt.'
}

let sobreProyecto = [item1, item2, item3, item4, item5]

function SobreProyecto() {

    const navigate = useNavigate()

    return (
        <>
        <main>

            <div className="sobre-proyecto">

                <Link className="flecha-anterior" id="sobre-nosotros" onClick={() => navigate(-1)}>
                    <i class="fa-solid fa-arrow-left"></i>
                </Link>

                <h1>Sobre el proyecto</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Purus gravida pharetra blandit diam commodo vulputate id.</p>

                <div className="seccion-sobre-proyecto">

                    {
                        sobreProyecto.map((item,i) => {
                            return <Item {...item} key={item+i} />
                        })
                    }
                
                <p className="segundo">Lorem ipsum dolor sit amet consectetur. Purus gravida pharetra blandit diam commodo vulputate id.</p>

                </div>
            </div>

        <Footer/>
        </main>
        </>
    )
}

export default SobreProyecto