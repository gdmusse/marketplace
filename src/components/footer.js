import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '.././imagens/logo/logo-branco.png'
import Face from '.././imagens/icones/facebook.png'
import Insta from '.././imagens/icones/insta.png'
import Twitter from '.././imagens/icones/twitter.png'
import Whats from '.././imagens/icones/whats.png'


const CorFooter = styled.div`
    background-color: #4A2F87;     
    min-height: auto;     
    width: 100%; 
    display: flex;
    justify-content: center;
    overflow: hidden;
`

const ContainerFooter = styled.div`
    width: 35vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ImagensFooter = styled.div`
    width: 150px;
    margin-top: 25px;
    margin-bottom: 25px;
`
const LogoFooter = styled.img`
    width: 150px;
`
const DivIcones = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Icones = styled.img`
    width: 25px;
`
const ContainerPaginas = styled.div`
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 10px;
    grid-template-columns: auto auto auto;
    width: auto;
    height: auto;
`
const BotaoPaginas = styled.button`
    font-size: 15px;
    text-align: left;
    border: none;
    background-color: transparent;
    outline: none;
    color: white;
    opacity: 1;
    :hover {
        opacity: .8;
        cursor: pointer;
    }
`
const CorCreditos = styled.div`
    background-color: #372365;
    height: 33px;
    width: 100%;
    `

const ContainerCreditos = styled.div`    
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    justify-content: center;
    height: 33px;

`
const TextoCreditos = styled.div`
    font-size: 12px;
`

class Footer extends Component {
    render() {
        return (
            <div>
                <CorFooter>
                    <ContainerFooter>
                        <ImagensFooter>
                            <LogoFooter src={Logo} />
                            <DivIcones>
                                <Icones src={Insta} />
                                <Icones src={Face} />
                                <Icones src={Twitter} />
                                <Icones src={Whats} />
                            </DivIcones>
                        </ImagensFooter>
                        <ContainerPaginas>
                            <Link to='/'><BotaoPaginas>Home</BotaoPaginas></Link>
                            <BotaoPaginas>Loja 1</BotaoPaginas>
                            <BotaoPaginas>Loja 3</BotaoPaginas>
                            <Link to='novo-produto'><BotaoPaginas>Área Lojista</BotaoPaginas></Link>
                            <BotaoPaginas>Loja 2</BotaoPaginas>
                            <BotaoPaginas>Loja 4</BotaoPaginas>
                            <Link to='login-cliente'><BotaoPaginas>Área do Cliente</BotaoPaginas></Link>
                        </ContainerPaginas>
                    </ContainerFooter>
                </CorFooter>
                <CorCreditos>
                    <ContainerCreditos>
                        <TextoCreditos>
                            Desenvolvido por Bea, Cacau, Jatobá, Madu e Musse
                        </TextoCreditos>
                    </ContainerCreditos>
                </CorCreditos>
            </div>
        )
    }
}

export default Footer