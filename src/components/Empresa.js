import React from "react";
import { Link } from 'react-router-dom'

function Empresa(props) {
    return (
        <>
            <div className="empresa">
                <Link to={`/empresas/${props.query}`} className="circulo-empresa">
                    <p className="titulo-empresa">{props.nombre}</p>
                </Link>
            </div>
        </>
    )
}

export default Empresa