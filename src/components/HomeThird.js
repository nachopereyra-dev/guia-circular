import React from "react";
import { Link } from 'react-router-dom'

function HomeThird() {

    const onClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'})
      }

    return (
        <>
            <div className="general-home-third">

                <div className="home-third" id="home-empresas">

                    <div className="titulo-home-third">
                        <h1>Empresas circulares en Maldonado</h1>
                    </div>

                    <Link to={'./empresas'} className="circulo" onClick={() => onClick('empresas')}>
                        <p className="ver-listado">Ver listado</p>
                    </Link>
                    
                </div>

                <div className="home-oportunidades">

                    <div className="titulo-home-oportunidades">
                        <h1>Oportunidades circulares</h1>
                    </div>

                    <Link to={'./oportunidades'} className="rectangulo" onClick={() => onClick('oportunidades')}>
                        <p className="ver-listado">Ver oportunidades</p>
                    </Link>

                    <Link className="flecha-home-third" onClick={() => onClick('home-sobre-nosotros')}>
                        <i className="fa-solid fa-arrow-down"></i>
                    </Link>

                </div>

            </div>

        </>
    )
}

export default HomeThird