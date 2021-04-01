import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Footer, DistanciaHeader } from "../components";
import { Titulo } from "../components"
import styled from 'styled-components'

const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Container = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: space-between;
`

const ContainerInput1 = styled.div`
width: 30%;
`

const ContainerInput2 = styled.div`
width: 30%;
`

const ContainerInput3 = styled.div`
width: 30%;
`

const Select = styled.select`
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

const ContainerAlturaPagina = styled.div`
min-height: 100vh;
display: flex;
flex-flow: column;
justify-content: space-between;
`

const ContainerTitulo = styled.div`
    width: 80vw;
    margin: auto;
`
const ButtonFlex = styled.div`
display: flex;
align-items: center;
justify-content: center;
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
  margin-bottom: 3%;
  `
const Letter = styled.p`
  color: #4A2F87;
  `

const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
  background-color: #E44E6D;
 
  `
const Img = styled.img`
  
  `

class NovoProduto extends Component {
    render() {
        return (
            <ContainerAlturaPagina>
                <Header />
                <ContainerTitulo>
                    <DistanciaHeader />
                    <Titulo titulo='Novo Produto' />
                </ContainerTitulo>
                <MainContainer>
                    <Container>
                        <ContainerInput1>
                            <Letter>Loja</Letter>
                            <Input placeholder='Nome da Loja'></Input>
                            <Letter>Descrição</Letter>
                            <Input placeholder='Ex: Vaso de ceramica medio'></Input>
                            <Letter>Formas de Pagamento</Letter>
                            <Select>
                                <option value={""}></option>
                                <option value={"Cartao"} >Cartão </option>
                                <option value={"Dinheiro"}>Dinheiro</option>
                            </Select>
                        </ContainerInput1>

                        <ContainerInput2>
                            <Letter>Nome do Produto</Letter>
                            <Input placeholder="Ex: Vaso Feliz"></Input>
                            <Letter>Preço</Letter>
                            <Input placeholder="Ex: 99,99"></Input>
                            <Letter>Número de Parcelas</Letter>
                            <Select>
                                <option value={""}></option>
                                <option value={"parcela1"} >1x </option>
                                <option value={"parcela2"}>2x</option>
                                <option value={"parcela3"}>3x</option>
                                <option value={"parcela4"}>4x </option>
                                <option value={"parcela5"}>5x</option>
                                <option value={"parcela6"}>6x</option>
                            </Select>
                        </ContainerInput2>
                        <ContainerInput3>
                            <Letter>Imagem</Letter>
                            <Input placeholder='Link da Imagem'></Input>
                            <ImgDiv><Img></Img></ImgDiv>
                        </ContainerInput3>
                    </Container>
                </MainContainer>
                <ButtonFlex>
                    <ButtonLojista>Publicar Produto</ButtonLojista>
                </ButtonFlex>
                <Footer />
            </ContainerAlturaPagina>
        )
    }
}

export default NovoProduto