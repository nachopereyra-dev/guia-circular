import React from "react";
import { Link } from 'react-router-dom'

function HomeTop() {
    return (
        <>
        <div className="home-top">

            <div className="sub-home-top">

                <div className="text">
                    <h1>Value proposition</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Sagittis faucibus  elementum leo diam risus  dapibus tincidunt.</p>
                </div>

                <div className="botones">
                    <Link to={'/patrones'} className="boton-patrones">Ver patrones</Link>
                    <Link className="boton-proyecto">Sobre el proyecto</Link>
                </div>

                <div className="flecha-home-top">
                    <i class="fa-solid fa-arrow-down"></i>
                </div>

            </div>
            
        </div>
        </>
    )
}

export default HomeTop