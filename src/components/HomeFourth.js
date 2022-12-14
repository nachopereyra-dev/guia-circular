import React from "react";
import { Link } from 'react-router-dom'
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

    const onClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'})
      }

    return (
        <>

            <div className="home-fourth" id="home-sobre-nosotros">

                <div className="seccion-sobre-proyecto">

                    <div className="titulo-sobre-proyecto">
                        <h1>Sobre el proyecto</h1>
                    </div>

                    {
                        sobreNosotros.map((item,i) => {
                            return <Item {...item} key={item+i} />
                        })
                    }

                    <Link to={'./sobre-nosotros'} className="ver-mas-sobre-proyecto" onClick={() => onClick('sobre-nosotros')}>
                        <p>Ver +</p>
                    </Link>

                    <Link className="flecha-home-fourth" onClick={() => onClick('home-top')}>
                        <i class="fa-solid fa-arrow-up"></i>
                    </Link>
                </div>
            
            </div>
        </>
    )
}

export default HomeFourth