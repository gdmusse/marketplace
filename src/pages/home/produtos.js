import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ContainterProdutos = styled.div`
    min-height: 500px;
    width: 80vw;
    margin: auto;
`

const ContainerTitulo = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Linha = styled.hr`
    flex: auto;
    width: auto;
    border: 1px solid #AD2985;
    opacity: 0.2;
`

const Titulo =  styled.div`
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 500;
    font-size: 35px;
    color: #AD2985;
`

// const ContainerTitulo = styled.div`
//   margin-top: 10vh;
//   margin-bottom: 10vh;
//   justify-content: center;
//   font-size: 30px;
//   font-weight: 500;
//   color: #ad2985;
//   display: flex;
//   position: relative;
//     z-index: 1;
//   &:before {
//     border-top: 2px solid #ad2985;
//     opacity: 0.2;
//         content:"";
//         margin: 0 auto;
//         position: absolute;
//         top: 50%; left: 0; right: 0; bottom: 0;
//         width: 100%;
//         z-index: -1;
//   }
// `

// const DivTitulo = styled.div`
//   padding: 20px;
// `


class ListaProdutos extends Component {
    render (){
        return(
            <ContainterProdutos>
                <ContainerTitulo>
                    <Linha/>
                    <Titulo>Produtos Recentes</Titulo>
                    <Linha/>
                </ContainerTitulo>
                {/* <DivTitulo>Seu Carrinho</DivTitulo> */}

            </ContainterProdutos>
        )
    }
}

export default ListaProdutos 