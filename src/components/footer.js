import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from '.././imagens/logo/logo-branco.png'
import face from '.././imagens/icones/facebook.png'
import insta from '.././imagens/icones/insta.png'
import twitter from '.././imagens/icones/twitter.png'
import whatsapp from '../imagens/icones/whats.png'

const Corfooter = styled.div`
    background-color: #4A2F87;
    height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
    `
const ContainerFooter = styled.div`
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;


`

const ImagensFooter = styled.div`
    width: 200px;
`
const LogoFooter = styled.img`
    width: 200px;
`
const DivIcones = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const Icones = styled.img`
`
const ContainerPaginas = styled.div`
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 10px;
    grid-template-columns: auto auto auto;
    width: 400px;
    height: 150px;
`
const BotaoPaginas = styled.button`
    font-size: 20px;
    text-align: left;
    border: none;
    background-color: transparent;
    outline: none;
    color: white;
    opacity: 1;
    :hover {
        opacity: .8;
    }
`
const CorCreditos = styled.div`
    background-color: #372365;
    height: 45px;
    width: 100%;
    `

const ContainerCreditos = styled.div`    
    display: flex;
    align-items: center;
    text-align: center;
    color: white;
    justify-content: center;
    height: 45px;

`
const TextoCreditos = styled.div`
`

class Footer extends Component {
    render (){
        return(
            <div>
            <Corfooter>
                <ContainerFooter>
                    <ImagensFooter> 
                        <LogoFooter src={logo}/>
                        <DivIcones>
                            <Icones src= {face}/>
                            <Icones src={insta}/>
                            <Icones src={twitter}/>
                            <Icones src={whatsapp}/>
                        </DivIcones>
                    </ImagensFooter>
                        <ContainerPaginas>
                            <BotaoPaginas>Home</BotaoPaginas>
                            <BotaoPaginas>Loja 1</BotaoPaginas>
                            <BotaoPaginas>Loja 3</BotaoPaginas>
                            <BotaoPaginas>Área Lojista</BotaoPaginas>
                            <BotaoPaginas>Loja 2</BotaoPaginas>
                            <BotaoPaginas>Loja 4</BotaoPaginas>
                            <BotaoPaginas>Área do Cliente</BotaoPaginas>
                        </ContainerPaginas>
                        </ContainerFooter>
                </Corfooter>
                <CorCreditos>
                    <ContainerCreditos>
                        <TextoCreditos>
                        <b>Desenvolvido por</b> Bea, Cacau, Jatobá, Madu e Musse
                        </TextoCreditos>
                    </ContainerCreditos>   
                </CorCreditos>
                </div>
        )
    }
}

export default Footer