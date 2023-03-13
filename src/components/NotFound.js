import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import Footer from "./Footer";

function NotFound() {

    const navigate = useNavigate()

    return (
        <>
            <main>
                <div className="not-found">

                    <Link className="flecha-anterior" onClick={() => navigate(-1)}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link>

                    <h2>Ruta incorrecta 😅, vuelve atras</h2>
                </div>

                <Footer/>
            </main>
        </>
    )
}

export default NotFound