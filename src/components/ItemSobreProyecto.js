import React from "react";

function itemSobreElProyecto(props) {
    return (
        <>
            <div className="item">
                
                    <div className="foto-circulo">

                    </div>

                    <div className="texto">

                        <a href={props.in} target='_blank'><p className="nombre">{props.nombre}</p><i class="fa-brands fa-linkedin"></i></a>
                        <p className="descripcion">{props.descripcion}</p>
                        { props.doctorado && <p className="descripcion">{props.doctorado}</p>}
                    </div>
            </div>
        </>
    )
}

export default itemSobreElProyecto