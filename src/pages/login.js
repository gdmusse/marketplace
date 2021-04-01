import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Header, Footer, DistanciaHeader} from "../components";
import { Titulo } from "../components"

const ButtonLogin = styled.button`
text-transform: uppercase;
border: 3px solid #E44E6D;
border-radius: 7px;
opacity: 1;
width: 180px;
height: 40px;
font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 16px/25px Poppins;
letter-spacing: var(--unnamed-character-spacing-0);
text-align: center;
font: normal normal normal 16px/25px Poppins;
letter-spacing: 0px;
color: #0AAA14;
opacity: 1;
background-color: white;
color: #E44E6D;
&:hover{
  background-color: #E44E6D;
  color: white;
  transition: 150ms;
}
`
const Container = styled.div`
width: 599px;
height: 368px;
text-align:center;
`
const BigContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Input = styled.input`
border: none;
border-bottom: 1px solid #4a2f87;
background-color:transparent;
::placeholder{
    color:#4a2f87;
}
opacity: 0.3;
width: 100%;
outline:none;
:focus {
    opacity:1;
}
margin-bottom:50px;
`

const Cadastrar = styled.p`
color: #4a2f87;
display:inline-block;
margin-top: 30px;

`
const CadastrarBold = styled.a`
color: #4a2f87;
font-weight: 700;
background-color:white;
border: none;
margin-left: 10px;
`




class LoginCliente extends Component {
    render() {
        return (
            <div>
              <Header/>
              <DistanciaHeader/>
              <Titulo titulo='Login'/>  
              
                <BigContainer>
                    <Container>
                        <Input placeholder='Nome'></Input>
                        <Input placeholder='Email'></Input>
                        <ButtonLogin>Efetuar Login</ButtonLogin>
                        <div></div>
                        <Cadastrar>Ainda não é cadastrado?</Cadastrar><CadastrarBold>Clique Aqui!</CadastrarBold>
                    </Container>
                </BigContainer>
              <Footer/>
            </div>

        )
    }
}

export default LoginCliente