import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const ContainterProdutos = styled.div`
    min-height: 500px;
    width: 80vw;
    background-color: red;
`

class ListaProdutos extends Component {
    render (){
        return(
            <ContainterProdutos>teste</ContainterProdutos>
        )
    }
}

export default ListaProdutos 