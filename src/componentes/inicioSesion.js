import React from "react";
import Helmet from "react-helmet";
import {Header, Titulo, ContenedorHeader} from "../elementos/header";
import Boton from "../elementos/boton";
import {Formulario, Input, ContenedorBoton} from "../elementos/elementosDeFormulario";
import {ReactComponent as SvgLogin} from "../multimedia/login.svg";
import styled from "styled-components";

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 12.5rem; /* 200px */
    margin-bottom: 1.25rem; /* 20px */
`

const InicioSesion = () => {
    return ( 
        <>
            <Helmet>
                <title>Iniciar Sesión</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Iniciar Sesión</Titulo>
                    <div>
                        <Boton to="/registro">Registrarse</Boton>
                    </div>
                </ContenedorHeader>
            </Header>

            <Formulario>
                <Svg />
                <Input
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                />
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Iniciar Sesión</Boton>
                </ContenedorBoton>
    
            </Formulario>
        </>
    );
}
 
export default InicioSesion;