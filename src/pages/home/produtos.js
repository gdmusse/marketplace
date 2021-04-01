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

const Titulo =  styled.div`
    margin-left: 15px;
    margin-right: 15px;
    font-weight: 500;
    font-size: 35px;
    color: #AD2985;
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
    height: 520px;
    display: flex;
    flex-flow: column;
    align-items: center;
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
    render (){
        return(
            <ContainterProdutos>
                <ContainerTitulo>
                    <Linha/>
                    <Titulo>Produtos Recentes</Titulo>
                    <Linha/>
                </ContainerTitulo>
                
                <ListaDeProdutos>
                    <CardProduto>
                        <DivImagem>
                            <ImagemProduto src={`https://picsum.photos/400/?random`}/>
                            <NomeLoja>Nome Loja Aqui</NomeLoja>
                        </DivImagem>
                        <InfosProduto>
                            <NomeProduto>Lorem ipsum dolor</NomeProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing</DescricaoProduto>
                            <PrecoProduto>R$ 1000,00</PrecoProduto>
                            <BotaoAdiciconar>Adicionar Produto</BotaoAdiciconar>
                        </InfosProduto>
                    </CardProduto>

                    <CardProduto>
                        <DivImagem>
                            <ImagemProduto src={`https://picsum.photos/400/?random`}/>
                            <NomeLoja>Nome Loja Aqui</NomeLoja>
                        </DivImagem>
                        <InfosProduto>
                            <NomeProduto>Lorem ipsum dolor</NomeProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing</DescricaoProduto>
                            <PrecoProduto>R$ 1000,00</PrecoProduto>
                            <BotaoAdiciconar>Adicionar Produto</BotaoAdiciconar>
                        </InfosProduto>
                    </CardProduto>

                    <CardProduto>
                        <DivImagem>
                            <ImagemProduto src={`https://picsum.photos/400/?random`}/>
                            <NomeLoja>Nome Loja Aqui</NomeLoja>
                        </DivImagem>
                        <InfosProduto>
                            <NomeProduto>Lorem ipsum dolor</NomeProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing</DescricaoProduto>
                            <PrecoProduto>R$ 1000,00</PrecoProduto>
                            <BotaoAdiciconar>Adicionar Produto</BotaoAdiciconar>
                        </InfosProduto>
                    </CardProduto>

                    <CardProduto>
                        <DivImagem>
                            <ImagemProduto src={`https://picsum.photos/400/?random`}/>
                            <NomeLoja>Nome Loja Aqui</NomeLoja>
                        </DivImagem>
                        <InfosProduto>
                            <NomeProduto>Lorem ipsum dolor</NomeProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing</DescricaoProduto>
                            <PrecoProduto>R$ 1000,00</PrecoProduto>
                            <BotaoAdiciconar>Adicionar Produto</BotaoAdiciconar>
                        </InfosProduto>
                    </CardProduto>

                    <CardProduto>
                        <DivImagem>
                            <ImagemProduto src={`https://picsum.photos/400/?random`}/>
                            <NomeLoja>Nome Loja Aqui</NomeLoja>
                        </DivImagem>
                        <InfosProduto>
                            <NomeProduto>Lorem ipsum dolor</NomeProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing</DescricaoProduto>
                            <PrecoProduto>R$ 1000,00</PrecoProduto>
                            <BotaoAdiciconar>Adicionar Produto</BotaoAdiciconar>
                        </InfosProduto>
                    </CardProduto>

                    <CardProduto>
                        <DivImagem>
                            <ImagemProduto src={`https://picsum.photos/400/?random`}/>
                            <NomeLoja>Nome Loja Aqui</NomeLoja>
                        </DivImagem>
                        <InfosProduto>
                            <NomeProduto>Lorem ipsum dolor</NomeProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing</DescricaoProduto>
                            <PrecoProduto>R$ 1000,00</PrecoProduto>
                            <BotaoAdiciconar>Adicionar Produto</BotaoAdiciconar>
                        </InfosProduto>
                    </CardProduto>

                    <CardProduto>
                        <DivImagem>
                            <ImagemProduto src={`https://picsum.photos/400/?random`}/>
                            <NomeLoja>Nome Loja Aqui</NomeLoja>
                        </DivImagem>
                        <InfosProduto>
                            <NomeProduto>Lorem ipsum dolor</NomeProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing</DescricaoProduto>
                            <PrecoProduto>R$ 1000,00</PrecoProduto>
                            <BotaoAdiciconar>Adicionar Produto</BotaoAdiciconar>
                        </InfosProduto>
                    </CardProduto>

                    <CardProduto>
                        <DivImagem>
                            <ImagemProduto src={`https://picsum.photos/400/?random`}/>
                            <NomeLoja>Nome Loja Aqui</NomeLoja>
                        </DivImagem>
                        <InfosProduto>
                            <NomeProduto>Lorem ipsum dolor</NomeProduto>
                            <DescricaoProduto>Lorem ipsum dolor sit amet, consectetur adipiscing</DescricaoProduto>
                            <PrecoProduto>R$ 1000,00</PrecoProduto>
                            <BotaoAdiciconar>Adicionar Produto</BotaoAdiciconar>
                        </InfosProduto>
                    </CardProduto>
                </ListaDeProdutos>
                
            </ContainterProdutos>
        )
    }
}

export default ListaProdutos 