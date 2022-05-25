import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Contenedor from './elementos/contenedor';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditarGasto from './componentes/editarGasto';
import GastosPorCategoria from './componentes/gastosPorCategoria';
import InicioSesion from './componentes/inicioSesion';
import ListaDeGastos from './componentes/listaDeGastos';
import Registro from './componentes/registro';
import {Helmet} from 'react-helmet';
import favicon from './multimedia/logo.png';
import Fondo from './elementos/fondo';

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Helmet>
        <link rel='shortcut icon' href={favicon} type='image/x-icon'/>
      </Helmet>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path='/inicio-sesion' element={<InicioSesion/>}/>
            <Route path='/registro' element={<Registro/>}/>
            <Route path='/categorias' element={<GastosPorCategoria/>}/>
            <Route path='/lista' element={<ListaDeGastos/>}/>
            <Route path='editar/:id' element={<EditarGasto/>}/>
            <Route path='/' element={<App/>}/>
          </Routes>
        </Contenedor>
      </BrowserRouter>

      <Fondo />
    </>
  </React.StrictMode>
);