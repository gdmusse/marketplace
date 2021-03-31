import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components' 
import Logo from '.././imagens/logo/logo-branco.png'
import Face from '.././imagens/icones/facebook.png'
import Insta from '.././imagens/icones/insta.png'
import Twitter from '.././imagens/icones/twitter.png'
import Whats  from '.././imagens/icones/whats.png'


const CorFooter = styled.div`
    background-color: #4A2F87;     
    height: 250px;     
    width: 100%; 
    display: flex;
    justify-content: center;
    overflow: hidden;
`      

const ContainerFooter = styled.div`
    width: 45vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ImagensFooter = styled.div`
    width: 200px;
`

const DivIcones = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`

const Icones = styled.img`
`

const LogoFooter = styled.img`
    width: 200px;
`

const ContainerPaginas = styled.div`
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 10px;
    grid-template-columns: auto auto auto;
    width: 400px;
    height: 150px;
`

const TituloPaginas = styled.button`
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
    justify-content: center;
    text-align: center;
    height: 45px;
`

const TextoCreditos = styled.label`
    color: white;  
`

class Footer extends Component {
    render (){
        return(
            <div>
                <CorFooter>
                    <ContainerFooter>
                        <ImagensFooter>
                            <LogoFooter src={Logo}/>

                            <DivIcones>
                                <Icones src={Face}/>
                                <Icones src={Insta}/>
                                <Icones src={Twitter}/>
                                <Icones src={Whats}/>
                            </DivIcones>
                        </ImagensFooter>

                        <ContainerPaginas> 
                            <TituloPaginas>Home</TituloPaginas>
                            <TituloPaginas>Loja 1</TituloPaginas>
                            <TituloPaginas>Loja 3</TituloPaginas>
                            <TituloPaginas>Área do Lojista</TituloPaginas>
                            <TituloPaginas>Loja 2</TituloPaginas>
                            <TituloPaginas>Loja 4</TituloPaginas>
                            <TituloPaginas>Área do Cliente</TituloPaginas>
                        </ContainerPaginas>
                    </ContainerFooter>
                </CorFooter>
                <CorCreditos>
                    <ContainerCreditos>
                        <TextoCreditos> 
                            <b>Desenvolvido por </b>Bea, Cacau, Jatobá, Madu e Musse
                        </TextoCreditos>
                    </ContainerCreditos>
                </CorCreditos>
            </div>
        )
    }
}

export default Footer