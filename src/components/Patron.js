import React from "react";
import { Link } from 'react-router-dom'

function Patron(props) {
    
    return (
        <>
                <Link to={`/patrones/${props.query}`} className="patron">
                        <div className="texto-patron">
                            <p className="numero-patron">{props.numero}</p>
                            <p className="titulo-patron">{props.titulo}</p>
                            { props.tituloSegundo && <p className="titulo-patron">{props.tituloSegundo}</p> }

                        </div>
                        
                        <div className="flecha">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                </Link>
        </>
    )
}

export default Patron