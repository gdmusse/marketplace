import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ContainterProdutos = styled.div`
    min-height: 500px;
    width: 80vw;
    background-color: red;
    margin: auto;
`

const ContainerTitulo = styled.div`
    display: flex;
    justify-content: center;
`

const Titulo =  styled.label`
    font-weight: 500;
    font-size: 35px;
    margin-left: 20px;
    margin-right: 20px;
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
                    <Titulo>Produtos recém publicados</Titulo>
                </ContainerTitulo>
                {/* <DivTitulo>Seu Carrinho</DivTitulo> */}

            </ContainterProdutos>
        )
    }
}

export default ListaProdutos 