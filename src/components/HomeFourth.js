import React from "react";
import Item from './ItemSobreProyecto'

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

let sobreNosotros = [item1, item2, item3]

function HomeFourth() {
    return (
        <>

            <div className="home-fourth">

                <div className="seccion-sobre-proyecto">

                    <div className="titulo-sobre-proyecto">
                        <h1>Sobre el proyecto</h1>
                    </div>

                    {
                        sobreNosotros.map((item,i) => {
                            return <Item {...item} key={item+i} />
                        })
                    }

                    <div className="ver-mas-sobre-proyecto">
                        <p>Ver +</p>
                    </div>

                    <div className="flecha-home-fourth">
                        <i class="fa-solid fa-arrow-up"></i>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default HomeFourth