import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Header, Footer, DistanciaHeader} from "../components";
import { Titulo } from "../components"
import styled from 'styled-components'

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

class NovoProduto extends Component {
    render (){
        return(
            <ContainerAlturaPagina> 
                <Header/>
                    <ContainerTitulo>
                        <DistanciaHeader/>
                        <Titulo titulo='Novo Produto'/>
                    </ContainerTitulo>
                <Footer/>
            </ContainerAlturaPagina>
        )
    }
}

export default NovoProduto