import React from "react";
import Helmet from "react-helmet";
import {Header, Titulo} from "../elementos/header";
import BtnRegresar from "../elementos/btnRegresar";

const GastosPorCategoria = () => {
    return ( 
        <>
            <Helmet>
                <title>Gastos por Categoria</title>
            </Helmet>

            <Header>
                <BtnRegresar />
                <Titulo>Gastos por Categoria</Titulo>
            </Header>
        </>
    );
}
 
export default GastosPorCategoria;