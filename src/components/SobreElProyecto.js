import React from "react";
import Item from './ItemSobreProyecto'
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import anto from '../assets/img/anto.png'
import alejo from '../assets/img/alejo.png'
import karina from '../assets/img/karina.png'
import nadia from '../assets/img/nadia.png'
import maxi from '../assets/img/maxi.png'
import habitat from '../assets/img/habitat.png'
import impacto from '../assets/img/impacto.png'
import vectores from '../assets/img/vectores.png'

let item1 = {
    nombre: 'Antonella Bulla',
    descripcion: 'Ingeniera en Telecomunicaciones',
    foto: anto,
    in: 'https://www.linkedin.com/in/antonella-bulla-pellegrini/'
}

let item2 = {
    nombre: 'Alejo Silvarrey',
    descripcion: 'Doctorado en Desarrollo Regional Sustentable',
    foto: alejo,
    in: 'https://www.linkedin.com/in/alejo-silvarrey-barruffa/ '
}

let item3 = {
    nombre: 'Karina Guerrero',
    descripcion: 'Licenciada en Administración - Contador',
    foto: karina,
    in: 'https://www.linkedin.com/in/karina-guerrero-896b1240'
}

let item4 = {
    nombre: 'Nadia Sencion',
    descripcion: 'Licenciada en Relaciones Institucionales',
    foto: nadia,
    in: 'https://www.linkedin.com/in/karina-guerrero-896b1240'
}

let item5 = {
    nombre: 'Maximiliano Ortellado',
    descripcion: 'Contador Público',
    foto: maxi
}

let sobreProyecto = [item1, item2, item3, item4, item5]

function SobreProyecto() {

    const navigate = useNavigate()

    return (
        <>
        <main>

            <div className="sobre-proyecto">

                <Link className="flecha-anterior" id="sobre-nosotros" onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>
                
                    <div className="text">

                        <h1>Sobre el proyecto</h1>
                        <p className="primero">El objetivo del proyecto Guía Circular es la detección de oportunidades de generación de modelos de negocios en clave circular a partir de empresas radicadas en territorio. Para ello se trabajó sobre las industrias Cáñamo, Pesca artesanal y Movilidad identificando estas oportunidades.<br></br>
                        <br></br>
                        Se usó la metodología Circular Design Thinking en cada una de las industrias, trabajando con los patrones de diseño circular.<br></br>
                        <br></br>
                        Se identificaron oportunidades de  generación de modelos de negocios a partir del analisis del ciclo de vida actual  actual de dichas industrias aplicando distintos patrones. 
                        </p>

                        <div className="seccion-sobre-proyecto">

                            {
                                sobreProyecto.map((item,i) => {
                                    return <Item {...item} key={item+i} />
                                })
                            }
                        
                        <div className="logos">

                            <div className="logo">
                                <p>Ejecución y desarrollo:</p>
                                <a href="https://ucu.edu.uy/es/centro-habitat" target='_blank'><img src={habitat} alt=''/></a>
                            </div>

                            <div className="logo">
                            <p>Metodología:</p>
                            <a href="https://3vectores.com/" target='_blank'><img src={vectores}/></a>
                            </div>

                            <div className="logo">
                            <p>Apoya:</p>
                            <a href="https://sites.google.com/view/rutadeimpacto/inicio" target='_blank'><img src={impacto}/></a>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        <Footer/>
        </main>
        </>
    )
}

export default SobreProyecto