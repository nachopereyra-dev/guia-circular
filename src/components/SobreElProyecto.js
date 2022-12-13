import React from "react";
import Item from './ItemSobreProyecto'
import Footer from "./Footer";

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
    return (
        <>
        <main>

            <div className="sobre-proyecto">

                <div className="flecha-anterior">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>

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