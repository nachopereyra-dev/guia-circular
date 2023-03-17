import React from "react";
import { Link } from 'react-router-dom'

function Oportunidad(props) {
    return (
        <>
            <div className="oportunidad">
                <Link to={`/oportunidades/${props.query}`} className="item-oportunidad">
                    <p className="titulo-oportunidad">{props.nombre}</p>
                </Link>
            </div>
        </>
    )
}

export default Oportunidad