import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Patrones from "./Patrones";
import PatronPagina from './PatronPagina';
import Empresas from './Empresas'
import EmpresaPagina from './EmpresaPagina';
import SobreElProyecto from "./SobreElProyecto";
import NotFound from './NotFound';
import Oportunidades from './Oportunidades';
import OportunidadPagina from './OportunidadPagina';


function App() {

  return (
    <BrowserRouter>
    <Header/>

    <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/patrones" element={<Patrones />}/>
                    <Route path="/patrones/:titulo" element={<PatronPagina />}/>
    

                    <Route path="/empresas" element={<Empresas />}/>
                    <Route path="/empresas/:nombre" element={<EmpresaPagina />}/>

                    <Route path="/oportunidades" element={<Oportunidades />}/>
                    <Route path="/oportunidades/:nombre" element={<OportunidadPagina />}/>

                    <Route path="/sobre-nosotros" element={<SobreElProyecto />} />   
                    <Route path='*' element={<NotFound />} />                        
    </Routes>

    </BrowserRouter>

    
  );
}

export default App;
