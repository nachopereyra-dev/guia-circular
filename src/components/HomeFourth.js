import React from "react";
import { Link } from 'react-router-dom'
import Item from './ItemSobreProyecto'
import anto from '../assets/img/anto.png'
import alejo from '../assets/img/alejo.png'
import karina from '../assets/img/karina.png'
import nadia from '../assets/img/nadia.png'
import maxi from '../assets/img/maxi.png'


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

function HomeFourth() {

    const onClick = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth'})
      }

    return (
        <>

            <div className="home-fourth" id="home-sobre-nosotros">

                    <div className="titulo-sobre-proyecto">
                        <h1>Sobre el proyecto</h1>
                    </div>
                    
                <div className="seccion-sobre-proyecto">


                    {
                        sobreProyecto.map((item,i) => {
                            return <Item {...item} key={item+i} />
                        })
                    }

                    <Link to={'./sobre-nosotros'} className="ver-mas-sobre-proyecto" onClick={() => onClick('sobre-nosotros')}>
                        <p>Ver +</p>
                    </Link>

                    <Link className="flecha-home-fourth" onClick={() => onClick('home-top')}>
                        <i className="fa-solid fa-arrow-up"></i>
                    </Link>
                </div>
            
            </div>
        </>
    )
}

export default HomeFourth