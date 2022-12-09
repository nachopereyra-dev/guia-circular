import React from "react";
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Patrones</Link>
                </li>
                <li>
                    <Link>Empresas</Link>
                </li>
                <li>
                    <Link>Sobre el proyecto</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar