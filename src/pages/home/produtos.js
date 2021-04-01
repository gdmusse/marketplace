import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Titulo} from '../../components'

const ContainterProdutos = styled.div`
    min-height: 500px;
    width: 80vw;
    margin: auto;
`

const ListaDeProdutos = styled.div`
    display: grid;
    justify-content: space-between;
    grid-row-gap: 75px;
    margin-bottom: 75px;
    grid-template-columns: 22% 22% 22% 22%;
`

const CardProduto = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 5px solid white;
    :hover {
        border-bottom: 5px solid #AD2985;
    }
`

const DivImagem = styled.div`
    width: 100%;
    height: 250px;
    position: relative;
    float: left;
`

const ImagemProduto = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`

const NomeLoja = styled.div`
    background-color: #AD2985;
    font-size: 18px;
    color: white;
    border-radius: 0px 100px 0px 0px;
    padding: 5px 0px 5px 15px;
    width: 75%;
    position: absolute;
    bottom: 0;
`

const InfosProduto = styled.div`
    width: 90%;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
`

const NomeProduto = styled.label`
    color: #202020;
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 10px;
`

const DescricaoProduto = styled.label`
    color: #202020;
    text-align: center;
    font-size: 18px;
`

const PrecoProduto = styled.label`
    color: #E44E6D;
    font-weight: 700;
    font-size: 25px;
    margin: 15px;
`

const BotaoAdiciconar = styled.button`
    border: none;
    font-weight: 500;
    font-size: 16px;
    background: #FFE3EA;
    box-shadow: 0px 3px 6px #00000012;
    padding: 10px 25px 10px 25px;
    border-radius: 10px;
    :hover { 
        background-color: #E44E6D;
        transform: scale(1.1);
        color: white;
        cursor: pointer;
    }

`

class ListaProdutos extends Component {
    state = {
        produtos: '',
        carregandoProdutos: false,
    }

    componentDidMount () {
        this.retornarProdutos()
    }

    retornarProdutos = () => {
        this.setState({carregandoProdutos: true})
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://us-central1-labenu-apis.cloudfunctions.net/eloFourThree/products/',
        headers: { }
        };

        axios(config)
        .then(function (response) {
            this.setState({produtos: response.data.products, carregandoProdutos:false})
        }.bind(this))
        .catch(function (error) {
        console.log(error);
        });
    }

    render (){
        return(
            <ContainterProdutos>
                
                <Titulo titulo='Produtos Recentes'/>
                <ListaDeProdutos>
                    {this.state.produtos.length > 0 ?
                        this.state.produtos.map ((produto) => (
                            <CardProduto>
                            <DivImagem>
                                <ImagemProduto src={produto.photos}/>
                                <NomeLoja>{produto.category}</NomeLoja>
                            </DivImagem>
                            <InfosProduto>
                                <NomeProduto>{produto.name}</NomeProduto>
                                <DescricaoProduto>{produto.description}</DescricaoProduto>
                                <PrecoProduto>R${produto.price}</PrecoProduto>
                                <BotaoAdiciconar>Adicionar Produto</BotaoAdiciconar>
                            </InfosProduto>
                        </CardProduto>
                    )) : this.state.carregandoProdutos ? 'Carregando produtos...' : 'Nenhum produto disponível'
                    }
                </ListaDeProdutos>
                
            </ContainterProdutos>
        )
    }
}

export default ListaProdutos 