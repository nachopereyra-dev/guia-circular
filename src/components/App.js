import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Header from './Header';
import SideBar from './SideBar';
import Home from './Home';
import Patrones from "./Patrones";
import PatronPagina from './PatronPagina';
import Empresas from './Empresas'
import Empresa from './Empresa';
import SobreElProyecto from "./SobreElProyecto";
import NotFound from './NotFound';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <SideBar/>

    <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/patrones" element={<Patrones />}>
                      <Route path="/patrones/:id" element={<PatronPagina />}/>
                    </Route>

                    <Route path="/empresas" element={<Empresas />}>
                      <Route path="/empresas/:nombre" element={<Empresa />}/>
                    </Route>

                    <Route path="/sobre-nosotros" element={<SobreElProyecto />} />   
                    <Route path='*' element={<NotFound />} />                        
    </Routes>

    </BrowserRouter>

    
  );
}

export default App;
