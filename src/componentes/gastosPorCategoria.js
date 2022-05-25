import React from "react";
import Helmet from "react-helmet";
import {Header, Titulo, ContenedorHeader} from "../elementos/header";

const GastosPorCategoria = () => {
    return ( 
        <>
            <Helmet>
                <title>Gastos por Categoria</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Gastos por Categoria</Titulo>
                </ContenedorHeader>
            </Header>
        </>
    );
}
 
export default GastosPorCategoria;