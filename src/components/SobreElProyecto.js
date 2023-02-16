import React from "react";
import Item from './ItemSobreProyecto'
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

let item1 = {
    nombre: 'Antonella Bulla',
    descripcion: 'Ingeniera en Telecomunicaciones',
    foto: '',
    in: 'https://www.linkedin.com/in/antonella-bulla-pellegrini/'
}

let item2 = {
    nombre: 'Alejo Silvarrey ',
    descripcion: 'Doctorado en Desarrollo Regional Sustentable',
    foto: '',
    in: 'https://www.linkedin.com/in/alejo-silvarrey-barruffa/ '
}

let item3 = {
    nombre: 'Karina Guerrero',
    descripcion: 'Licenciada en Administración - Contador',
    foto: '',
    in: 'https://www.linkedin.com/in/karina-guerrero-896b1240'
}

let item4 = {
    nombre: 'Título',
    descripcion: 'Lorem ipsum dolor sit amet consectetur. Sagittis faucibus  elementum leo diam risus  dapibus tincidunt.'
}

let sobreProyecto = [item1, item2, item3, item4]

function SobreProyecto() {

    const navigate = useNavigate()

    return (
        <>
        <main>

            <div className="sobre-proyecto">

                <Link className="flecha-anterior" id="sobre-nosotros" onClick={() => navigate(-1)}>
                    <i class="fa-solid fa-arrow-left"></i>
                </Link>
                
                    <div className="text">

                        <h1>Sobre el proyecto</h1>
                        <p className="primero">El objetivo del proyecto Guía Circular es la detección de oportunidades de generación de modelos de negocios en clave circular a partir de empresas radicadas en territorio. Para ello se trabajó sobre las industrias Cáñamo, Pesca artesanal y Movilidad identificando estas oportunidades.<br></br>
                        <br></br>
                        Se usó la metodología CDT en cada una de las industrias, trabajando con los patrones de diseño circular.<br></br>
                        <br></br>
                        Se identificaron oportunidades de  generación de modelos de negocios a partir del analisis del ciclo de vida actual  actual de dichas industrias aplicando distintos patrones. 
                        </p>

                        <div className="seccion-sobre-proyecto">

                            {
                                sobreProyecto.map((item,i) => {
                                    return <Item {...item} key={item+i} />
                                })
                            }
                        
                        <p className="segundo">Lorem ipsum dolor sit amet consectetur. Purus gravida pharetra blandit diam commodo vulputate id.</p>

                    </div>

                </div>
            </div>

        <Footer/>
        </main>
        </>
    )
}

export default SobreProyecto