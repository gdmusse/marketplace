import React, { Component } from 'react'
import styled from 'styled-components'


const ContainerTitulo = styled.div`
    margin-top: 60px;
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Linha = styled.hr`
    flex: auto;
    width: auto;
    border: 1px solid #AD2985;
    background-color: #AD2985;
    border-radius: 100px;
    opacity: 0.2;
`

const TituloPagina =  styled.div`
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 500;
    font-size: 35px;
    color: #AD2985;
`

class Titulo extends Component {
    render() {
      return (
        <ContainerTitulo>
            <Linha/>
            <TituloPagina>{this.props.titulo}</TituloPagina>
            <Linha/>
        </ContainerTitulo>
    )
    }
  }
  
  export default Titulo