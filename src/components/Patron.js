import React from "react";
import { Link } from 'react-router-dom'



function Patron(props) {
    return (
        <>
                <Link className="patron">
                        <div className="texto-patron">
                            <p className="numero-patron">{props.numero}</p>
                            <p className="titulo-patron">{props.titulo}</p>
                            <p className="titulo-patron">{props.tituloSegundo}</p>

                        </div>
                        
                        <div className="flecha">
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>
                </Link>
        </>
    )
}

export default Patron