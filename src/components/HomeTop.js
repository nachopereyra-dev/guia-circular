import React from "react";
import { Link } from 'react-router-dom'

function HomeTop() {

    const onClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'})
      }

    return (
        <>
        <div className="home-top" id="home-top">

            <div className="sub-home-top">

                <div className="text">
                    <h1>Oportunidades circulares para tu startup o negocio</h1>
                    <p>Identificamos oportunidades circulares en el territorio uniendo oferta y demanda en distintas industrias que contribuyan al desarrollo modelos de negocios en clave de economía circular.</p>
                </div>

                <div className="botones">
                    <Link to={'/patrones'} className="boton-patrones">Ver patrones</Link>
                    <Link to={'/sobre-nosotros'} className="boton-proyecto">Sobre el proyecto</Link>
                </div>

                <Link className="flecha-home-top" onClick={() => onClick('home-patrones')}>
                    <i className="fa-solid fa-arrow-down"></i>
                </Link>

            </div>
            
        </div>
        </>
    )
}

export default HomeTop