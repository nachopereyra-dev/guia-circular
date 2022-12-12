import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Header from './Header';
import SideBar from './SideBar';
import Home from './Home';
import Patrones from "./Patrones";
import Empresas from './Empresas'
import SobreElProyecto from "./SobreElProyecto";
import NotFound from './NotFound';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <SideBar/>

    <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/patrones" element={<Patrones />} />
                    <Route path="/empresas" element={<Empresas />} />
                    <Route path="/sobre-nosotros" element={<SobreElProyecto />} />   
                    <Route path='*' element={<NotFound />} />                        
    </Routes>

    </BrowserRouter>

    
  );
}

export default App;
