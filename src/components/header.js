import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../imagens/logo/logo-colorido.png'
import carrinho from '../imagens/icones/shopping-cart.png'

const ContainerHeader = styled.div`
width: 100%;
height: 15vh;
display: flex;
justify-content: space-around;
align-items: center;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 6px #00000029;
opacity: 1;
position: fixed;
top: 0;
z-index: 22;

`
const SubContainerHeader = styled.div`
width: 80%;
height: 15vh;
display: flex;
justify-content: space-between;
align-items: center;

`
const ContainerLojista = styled.div`
`

const ContainerCliente = styled.div`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
`

const ImagemLogo = styled.img`
height: 80%;
`

const Logo = styled.div`
height:100%;
display :flex;
align-items:center;
justify-content:center;
`
const LogoButton = styled.button`
height: 100%;
background-color: #FFF;
border:0;
&:hover {
    cursor: pointer;
  }
`

const ButtonLojista = styled.button`
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
&:hover {
    cursor: pointer;
  }
`

const ButtonCliente = styled.button`
text-transform: uppercase;
border: 0;
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
text-decoration: underline;
  transition: 150ms;
}
&:hover {
    cursor: pointer;
  }
`
const Carrinho = styled.button`
width: 50px;
height: 45px;
background-color: white;
border: 0;
&:hover {
    cursor: pointer;
  }
`
const CarrinhoImg = styled.img`
height:30px;
`

class Header extends Component {
  render() {
    return (
      <ContainerHeader>
        <SubContainerHeader>
          <ContainerLojista><Link to='/novo-produto'><ButtonLojista>Área do Logista</ButtonLojista></Link></ContainerLojista>
          <LogoButton><Link to='/'><Logo><ImagemLogo src={logo}></ImagemLogo></Logo></Link></LogoButton>
          <ContainerCliente><Link to='/login-cliente'><ButtonCliente>Área do Cliente</ButtonCliente></Link>
            <Carrinho><Link to='carrinho'><CarrinhoImg src={carrinho}></CarrinhoImg></Link></Carrinho></ContainerCliente>
        </SubContainerHeader>
      </ContainerHeader>
    )
  }
}

export default Header