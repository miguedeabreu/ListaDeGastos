import React from "react";
import Helmet from "react-helmet";
import {Header, Titulo, ContenedorHeader} from "../elementos/header";
import Boton from "../elementos/boton";
import {Formulario, Input, ContenedorBoton} from "../elementos/elementosDeFormulario";
import {ReactComponent as SvgLogin} from "../multimedia/registro.svg";
import styled from "styled-components";

const Svg = styled(SvgLogin)`
    width: 100%;
    max-height: 6.25rem; /* 100px */
    margin-bottom: 1.25rem; /* 20px */
`

const RegistroUsuarios = () => {
    return ( 
        <>
            <Helmet>
                <title>Crear Cuenta</title>
            </Helmet>

            <Header>
                <ContenedorHeader>
                    <Titulo>Crear Cuenta</Titulo>
                    <div>
                        <Boton to="/inicio-sesion">Iniciar Sesión</Boton>
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
                <Input
                    type="password"
                    name="password2"
                    placeholder="Repetir Contraseña"
                />
                <ContenedorBoton>
                    <Boton as="button" primario type="submit">Crear Cuenta</Boton>
                </ContenedorBoton>
    
            </Formulario>
        </>
    );
}
 
export default RegistroUsuarios;