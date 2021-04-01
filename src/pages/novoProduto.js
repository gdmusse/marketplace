import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { Header, Footer, DistanciaHeader} from "../components";
import { Titulo } from "../components"
import styled from 'styled-components'

const ContainerTitulo = styled.div`
    width: 80vw;
    margin: auto;
`

class NovoProduto extends Component {
    render (){
        return(
            <div> 
                <Header/>
                    <ContainerTitulo>
                        <DistanciaHeader/>
                        <Titulo titulo='Novo Produto'/>
                    </ContainerTitulo>
                <Footer/>
            </div>
        )
    }
}

export default NovoProduto