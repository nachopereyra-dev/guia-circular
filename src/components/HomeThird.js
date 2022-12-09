import React from "react";
import { Link } from 'react-router-dom'

function HomeThird() {
    return (
        <>
            <div className="home-third">

                <div className="titulo-home-third">
                    <h1>Empresas circulares en Maldonado</h1>
                </div>

                <Link className="circulo">
                    <p className="ver-listado">Ver listado</p>
                </Link>

                <div className="flecha-home-third">
                    <i class="fa-solid fa-arrow-down"></i>
                </div>

                
            </div>
        </>
    )
}

export default HomeThird