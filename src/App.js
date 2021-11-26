import "./App.css";
import React from "react";
import "./Styles/Styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFound from './componentes/views/NotFound';
import CityConfiguration from './componentes/views/CityConfiguration';
import Home from './componentes/views/Home';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>            
        <Routes >
          <Route path='/' element={<Home/>} />
          <Route path='/CityConfiguration' element={<CityConfiguration/>} />
          <Route path="*" element={<NotFound/>} />           
        </Routes >           
      </BrowserRouter>
        
    </>
  )

}

export default App;