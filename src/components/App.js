import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header';
import SideBar from './SideBar';
import Home from './Home';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <SideBar/>
    <Home/>
    </BrowserRouter>
  );
}

export default App;
