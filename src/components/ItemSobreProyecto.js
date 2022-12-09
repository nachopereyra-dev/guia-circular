import React from "react";

function itemSobreElProyecto(props) {
    return (
        <>
            <div className="item">
                
                    <div className="foto-circulo">

                    </div>

                    <div className="texto">

                        <p className="nombre">{props.nombre}</p>
                        <p className="descripcion">{props.descripcion}</p>
                    </div>
            </div>
        </>
    )
}

export default itemSobreElProyecto