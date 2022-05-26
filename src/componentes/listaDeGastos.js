import React from "react";
import Helmet from "react-helmet";
import {Header, Titulo} from "../elementos/header";
import BtnRegresar from "../elementos/btnRegresar";

const ListaDeGastos = () => {
    return ( 
        <>
            <Helmet>
                <title>Lista de Gastos</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Lista de Gastos</Titulo>
            </Header>
        </>
    );
}
 
export default ListaDeGastos;