import React from 'react';
import Helmet from 'react-helmet';
import {Header, Titulo, ContenedorHeader, ContenedorBotones} from './elementos/header';
import Boton from './elementos/boton';

const App = () => {
  return ( 
    <>
      <Helmet>
        <title>Agregar Gasto</title>
      </Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Agregar Gasto</Titulo>
          <ContenedorBotones>
            <Boton to="/categorias">Categorias</Boton>
            <Boton to="/lista">Lista de Gastos</Boton>
            <Boton to="/">X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  );
}
 
export default App;