import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from "./Footer";

let patron1 = {
    numero: 1,
    query: 'biomimetica',
    titulo: 'Biomimética',
    descripcion: 'La biomimética (de bio, "vida", y mimesis, "imitar") toma inspiración de las estrategias, principios y patrones empleados por la naturaleza para diseñar soluciones más eficientes y sustentables, ya sea desde la función, la forma, o ambos.'
}

let patron2 = {
    numero: 2,
    query: 'ecodiseño',
    titulo: 'Ecodiseño',
    descripcion: 'Considera la reducción del impacto ambiental y un mejor uso de los recursos a través de un diseño del producto o servicio que contemple todas las etapas de su ciclo de vida, desde la obtención de las materias primas a su fin de vida.'
   }

let patron3 = {
    numero: 3,
    query: 'recursos-inteligentes',
    titulo: 'Recursos inteligentes',
    descripcion: 'Estos objetos, capaces de captar, registrar y transmitir información sobre sí mismos y su entorno, tienen el potencial de moldear la forma en que producimos bienes y servicios, generamos energía y convivimos en ciudades. La inteligencia del objeto permite ubicar, trazar, analizar su estado y disponibilidad para un uso más eficiente de los recursos'
}

let patron4 = {
    numero: 4,
    query: 'codigo-abierto',
    titulo: 'Código abierto',
    descripcion: 'Originado en la industria del software, funciona como una plataforma para la colaboración abierta de organizaciones e individuos que abordan diferentes partes de un problema y construyen sobre la información del otro. Se reducen tiempos, costos de I+D y esfuerzos.'
}

let patron5 = {
    numero: 5,
    query: 'recursos-compartidos',
    titulo: 'Recursos compartidos',
    descripcion: 'Brinda acceso a productos, equipamiento, espacios, y otros recursos, maximizando su utilización ya sea en una modalidad de contrato entre pares (P2P, B2B), alquiler a mediano plazo, suscripción y uso recurrente, entre otros.'
}

let patron6 = {
    numero: 6,
    query: 'biodiseño',
    titulo: 'Biodiseño',
    descripcion: 'Explora el diseño y desarrollo de soluciones utilizando organismos vivos (biomateriales) o de biología sintética. Absorbe el proceso técnico ya que los remanentes que puedan generarse son alimentos para el sistema o pueden regenerarlo.'
}

let patron7 = {
    numero: 7,
    query: 'logistica-reversa',
    titulo: 'Logística reversa',
    descripcion: 'Implica preservar el valor de los materiales técnicos o biológicos mediante su recuperación al fin de uso de los productos para reintroducirlos al sistema. Se debe planificar y optimizar su sistema de recogida, transporte, clasificación y almacenamiento.'
}

let patron8 = {
    numero: 8,
    query: 'simbiosis-industrial',
    titulo: 'Simbiosis industrial',
    descripcion: 'Utilizar materiales, productos o infraestructura de una cadena de valor a otra a través de la "cascada" de recursos. Esto ahorra costos de nuevos materiales incluyendo energía.'
}

let patron9 = {
    numero: 9,
    query: 'reparar',
    titulo: 'Reparar',
    descripcion: 'Hacer de la reparación, mantenimiento y reacondicionamiento de productos una propuesta de valor al ofrecer alto rendimiento y servicios accesible a un precio competitivo.'
}

let patron10 = {
    numero: 10,
    query: 'regenerar',
    titulo: 'Regenerar',
    descripcion: 'Integrar la regeneración de personas, comunidades y/o naturaleza al modelo de negocios. Centrarse en prácticas regenerativas que mejoran, reconstruyen y regeneran la vida y los ecosistemas.'
}

let patron11 = {
    numero: 11,
    query: 'intercambiar',
    titulo: 'Intercambiar',
    descripcion: 'Implementar los cambios necesarios para reemplazar materiales, fuentes de energía, procesos y/o tecnologías por otros que permitan optimizar y ahorrar recursos a fin de mitigar el impacto.'
}

let patron12 = {
    numero: 12,
    query: 'industria',
    titulo: 'Industria',
    tituloSegundo: '4.0',
    descripcion: 'Desarrollo de estrategias de fabricación con la ayuda de tecnologías 4.0 como la automatización, la analítica de big data, la transparencia y trazabilidad de la información y las capacidades de personalización masiva (machine learning, impresión 3D), entre otras.'
}

let patron13 = {
    numero: 13,
    query: 'comunidades-locales',
    titulo: 'Comunidades locales',
    descripcion: 'Fortalecer y empoderar a las comunidades locales optando por lo que está disponible localmente en primer lugar, la creación de capacidades y redes, la co-creación de soluciones, la mejora del empleo y la reducción de las desigualdades. Transition Network, Movimiento Slow Livin.'
}

let patron14 = {
    numero: 14,
    query: 'producto-como-servicio',
    titulo: 'Producto como servicio',
    descripcion: 'La “servitización” se enfoca en entregar la experiencia de uso en lugar de la venta de productos. El cliente paga por el tiempo de uso y el proveedor mantiene la propiedad del producto durante todo el ciclo de vida.'
}

let patron15 = {
    numero: 15,
    query: 'virtualizar',
    titulo: 'Virtualizar',
    descripcion: 'Sustituir total o parcialmente la fisicalidad de un producto, servicio o proceso interno a lo largo de su ciclo de vida mediante una solución digital. Esto resulta en una reducción de materiales, uso de energía, generación de residuos e infraestructura, así como en innovaciones tecnológicas.'
}

let patron16 = {
    numero: 16,
    query: 'remanufacturar',
    titulo: 'Re - manufacturar',
    tituloSegundo: ' ',
    descripcion: 'Restaurar productos o algunos de sus componentes para que sirvan a su función original. El proceso puede tener como objetivo mejorar la estética o, de forma más exhaustiva, igualar el rendimiento de un producto totalmente nuevo.'
}

let patron17 = {
    numero: 17,
    query: 'reciclar',
    titulo: 'Reciclar',
    descripcion: 'Utilizar recursos descartados, recuperar para revalorizar y reintroducir al mercado nuevos materiales o productos de mejor calidad, con un valor social o ambiental. Reduce el uso de materias primas y el consumo de recursos.'
}

let patrones = [patron1, patron2, patron3, patron4, patron5, patron6, patron7, patron8, patron9, patron10, patron11, patron12, patron13, patron14, patron15, patron16, patron17]

function PatronPagina(props) {

    const id = useParams()
    const navigate = useNavigate()
    
    const patron = patrones.find(patron => patron.query == id.titulo)

    return (
        <>
        <main>
            <div className="patron-pagina">

                <Link className="flecha-anterior" onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>

                <div className="text">
                    <h2>{patron.titulo}</h2>
                    <p>{patron.descripcion}</p>
                        { patron.oportunidadTitulo && <h2>Oportunidades circulares</h2> }
                    <p>{patron.oportunidad}</p>
                </div>
            </div>

            <Footer/>
        </main>
        </>
    )
}

export default PatronPagina