import React from "react";
import { useParams, useNavigate, Link } from 'react-router-dom'
import Footer from './Footer'

let empresa1 = {
    id: 1,
    query: 'empresa-1',
    nombre: 'Plasticoin',
    etiqueta: 'Reciclaje - Comunidades locales',
    contenido: 'Plasticoin, es un proyecto de Economía Circular apoyado por la Agencia Nacional de Desarrollo (ANDE). Generan una moneda virtual ecológica que le da valor de cambio a los residuos plásticos para estimular su limpieza, clasificación y entrega en nuestros Centros de Acopio. El objetivo de Plasticoin es fomentar cambios en el tratamiento irresponsable que le damos a nuestros desechos plásticos en el día a día, educando y recompensando en el proceso.',
    web: 'https://www.plasticoin.com.uy/'
}

let empresa2 = {
    id: 2,
    query: 'empresa-2',
    nombre: 'Abito',
    etiqueta: 'Reciclaje',
    contenido: 'Abito es una empresa de triple impacto que llegó para impulsar la revalorización de los residuos. Facilitan la clasificación en origen y el transporte de los residuos para que puedan ser reciclados y compostados. En ABITO proponen una solución enfocada en el cuidado del medio ambiente, la revalorización de los materiales y la participación de todos como protagonistas responsables de lo que consumimos y lo que producimos.',
    web: 'https://abito.com.uy/'
}

let empresa3 = {
    id: 3,
    query: 'empresa-3',
    nombre: 'Werba',
    etiqueta: 'Reciclaje',
    contenido: 'Werba es una empresa familiar con cuatro generaciones de experiencia que garantizan continuidad y capacidad para evolucionar. 80 años de experiencia los ha posicionado como la empresa líder en Uruguay en la industria del reciclaje de metales no ferrosos. Durante este período, Werba ha desarrollado tecnología y conciencia ecológica hasta alcanzar los niveles de calidad de los países más desarrollados, que hoy aplica tanto a su personal y sus procesos de producción, como a proveedores y clientes.',
    web: 'https://werbasa.com/'
}

let empresa4 = {
    id: 4,
    query: 'empresa-4',
    nombre: 'Vitanna',
    etiqueta: 'Reciclaje - Ecodiseño',
    contenido: 'El objetivo de Vitanna, además de incorporar nuevos alimentos saludables, es lograr un impacto social mediante la promoción de un estilo de vida saludable, que involucre el cuidado de nuestro cuerpo, mente y espíritu. Su filosofia de basa en vivir en armonía con el Cielo y la Tierra y para ello creen que el camino es cuidando nuestro Ser integral, contactando con la naturaleza, alimentándonos sanamente y con consciencia, mirándonos en nuestro interior, con nuestras luces y sombras, para procurar ser cada día mejores personas, brindando lo mejor de nosotros en cada encuentro.',
    web: 'https://vitanna.com.uy/'
}

let empresa5 = {
    id: 5,
    query: 'empresa-5',
    nombre: 'Mare',
    etiqueta: 'Ecodiseño',
    contenido: 'Reutilizan silo bolsas y big bags para crear diferentes tipos de contenedores flexibles, comercializables, trabajando con talleres de costura liderados por mujeres del medio rural y mujeres en situación de vulnerabilidad social, económica y territorial.',
    web: 'https://maresustentable.uy/'
}

let empresa6 = {
    id: 6,
    query: 'empresa-6',
    nombre: 'Mutta',
    etiqueta: 'Ecodiseño',
    contenido: 'Emprendimiento de triple impacto que utiliza diferentes productos útiles reutilizando plástico de un solo uso y textiles. Ayudan a reducir la contaminación por plásticos revalorizando residuos de plástico, un plástico no reciclable, proviniente mayormente de bolsas de alimentos para mascotas. Evitan que esos plásticos terminen en el mar o en vertederos. También recuperan telas de descartes que les brinda @muebles.da.vinci y cuando tienen que comprar eligen saldos de tela para evitar que éstos terminen siendo deshechados. Durante el proceso de producción de sus productos, es necesario lavar las bolsas y ponerlas a punto para ser usadas como materia prima, ese trabajo lo hacen en @lavadero_arcoiris_21, un lavadero que da empleo a jóvenes con Síndrome de Down. Los trabajos de costura son realizados por emprendedoras Literal E Mides.',
    web: 'https://linktr.ee/muttauy'
}

let empresa7 = {
    id: 7,
    query: 'empresa-7',
    nombre: 'Wirapita',
    etiqueta: 'Biodiseño',
    contenido: 'Wirapita tech es una empresa uruguaya de triple impacto, social, económico y ambiental. Recolectan los residuos industriales y los convierten en energía potenciada (biofertilizantes y humus) que comercializan y logran mejorar la materia orgánica del suelo, sus propiedades físicas y su actividad biológica.',
    web: 'https://wirapita.com/'
}

let empresa8 = {
    id: 8,
    query: 'empresa-8',
    nombre: 'Autóctona',
    etiqueta: 'Ecodiseño',
    contenido: 'Autóctona te ofrece productos responsables para el cuidado y disfrute de tu piel. Productos naturales, orgánicos y veganos comprometidos con el desarrollo sostenible en sus 4 dimensiones: económico, social, ambiental y emocional. Autóctona desarrolla biocosmética natural, orgánica y vegana resultado de nuestra selección de materias primas identitarias de nuestro país con el respaldo de un laboratorio de vanguardia. Pensada para una hotelería amigable y sensible a la importancia de hacer vivir experiencias únicas a sus pasajeros. A través de nuestras líneas, creamos experiencias sustentables que combinan armoniosamente esencias uruguayas con tecnología, ética responsable y consumo consciente.',
    web: 'https://autoctona.com.uy/'
}

let empresa9 = {
    id: 9,
    query: 'empresa-9',
    nombre: 'Arre arquitectura',
    etiqueta: 'Ecodiseño',
    contenido: 'aRRe - aRquitectura Regenerativa - no solo trata de construir casas, sino de construir legado. En Uruguay son vanguardistas y quieren llevar la construccion al siguiente nivel. Fomentan el uso de materiales y fibras que sean naturales y locales, favoreciendo la economía circular y a al vez, logrando los más altos estándares de confort y calidad. ',
    web: 'http://www.arre.bio/'
}

let empresa10 = {
    id: 10,
    query: 'empresa-10',
    nombre: 'Piel de papel',
    etiqueta: 'Ecodiseño',
    contenido: 'Le dan una segunda vida a los desechos de frutas y verduras creando Papeles únicos, orgánicos, reciclados & sustentables',
    web: 'https://beacons.ai/pieldepapel'
}

let empresa11 = {
    id: 11,
    query: 'empresa-11',
    nombre: '1000 razones',
    etiqueta: 'Producto como servicio',
    contenido: 'Todas las mujeres tenemos vestidos y accesorios en nuestros roperos que ya no usamos y que no sabemos que hacer con ellos. Algunos porque ya los usamos muchas veces y otros porque nos encantaron en su momento pero ahora ya no los queremos volver a usar. 1000 Razones te da la posibilidad de poder “Poner a trabajar tu ropero” y ganar plata alquilándolos. Vestidos que nosotras no vamos a volver a usar puede que a nuestras amigas les encante y quieran usar. (y viceversa). En eso consiste este Club de Mujeres! El objetivo es organizarnos para el beneficio de todas.',
    web: 'https://1000razones.com/'
}

let empresa12 = {
    id: 12,
    query: 'empresa-12',
    nombre: 'Lam Arte Textil',
    etiqueta: 'Ecodiseño',
    contenido: 'Moda sustentable con Tintes naturales e Impresión botánica. Lam Arte Textil es arte textil que busca preservar y honrar a la madre tierra. Sierras de Rocha ',
    web: 'https://lam-artetextil.com/'
}

let empresa13 = {
    id: 13,
    query: 'empresa-13',
    nombre: 'Sellin',
    etiqueta: 'Comunidades locales',
    contenido: 'Sellin es una empresa de triple impacto que desarrolla oportunidades comerciales y productivas para que microproductores de todo el país puedan vivir de lo que aman hacer sin la necesidad de desarraigo territorial. Trabajan junto a clientes y aliados para co-crear soluciones que permitan el desarrollo de cadenas de valor de triple impacto. Revalorizan la micro producción y las compras con impacto.',
    web: 'https://infosellinuy.wixsite.com/comprarensellin'
}

let empresa14 = {
    id: 14,
    query: 'empresa-14',
    nombre: 'Resur',
    etiqueta: 'Comunidades locales - Ecodiseño',
    contenido: 'Moda Sostenible e Inclusiva. Capacitan personas privadas de libertad en textiles, marroquinería, y competencias transversales.',
    web: 'https://www.instagram.com/resur_uy/?hl=es'
}

let empresas = [empresa1, empresa2, empresa3, empresa4, empresa5, empresa6, empresa7, empresa8, empresa9, empresa10, empresa11, empresa12, empresa13, empresa14]


function EmpresaPagina(props) {

    const navigate = useNavigate()
    const params = useParams()
    
    const empresa = empresas.find(empresa => empresa.query === params.nombre)
    console.log(empresa)

    return (
        <>
            <main>
                <div className="empresa-pagina">

                <Link className="flecha-anterior" onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </Link>

                <h2>{empresa.nombre}</h2>
                <p className='patron-etiqueta'>{empresa.etiqueta}</p>
                <p className="descripcion-empresa">{empresa.contenido}</p>
                
                <a href={empresa.web} target='_blank' className="web-empresa">
                    <i className="fas fa-globe"></i>
                    {empresa.web}
                </a>

                </div>

                <Footer/>
            </main>
        </>
    )
}

export default EmpresaPagina