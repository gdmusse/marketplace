import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import trash from "../imagens/icones/trash.png";
import trashwhite from "../imagens/icones/trash-white.png";
import { Header, Footer } from "../components";

const DivBody = styled.div`
  width: 80vw;
  margin: auto;
  margin-bottom: 60px;
`;
const ContainerTitulo = styled.div`
  margin-top: 10vh;
  margin-bottom: 10vh;
  justify-content: center;
  font-size: 30px;
  font-weight: 500;
  color: #ad2985;
  display: flex;
  position: relative;
  z-index: 1;
  &:before {
    border-top: 2px solid #ad2985;
    opacity: 0.2;
    content: "";
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }
`;
const DivTitulo = styled.div`
  padding: 20px;
  background: #fff;
`;
const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
`;
const DivTitulos = styled.div`
  height: 60px;
  background: var(--unnamed-color-4a2f87) 0% 0% no-repeat padding-box;
  background: #4a2f87 0% 0% no-repeat padding-box;
  border-radius: 20px 20px 0px 0px;
  opacity: 1;
  display: flex;
  font-weight: 600;
  color: white;
`;
const DivInfos = styled.div`
  min-height: 150px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #707070;
  border-radius: 0px 0px 20px 20px;
  opacity: 1;
  display: flex;
`;
const TextoTitulos = styled.div``;
const Coluna1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;
const Coluna2 = styled.div`
  flex: 1.2;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;
const Coluna3 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;
const Coluna4 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;
const Coluna5 = styled.div`
  flex: 1.3;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;
const Coluna6 = styled.div`
  flex: 1.3;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
`;

const DivBotoes = styled.div`
  display: flex;
`;
const BotaoAdicionar = styled.button`
  border: 3px solid #0aaa14;
  border-radius: 7px;
  opacity: 1;
  width: 180px;
  height: 40px;
  text-align: center;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: #0aaa14;
  opacity: 1;
  background-color: white;
  &:hover {
    background-color: #0aaa14;
    color: white;
    transition: 150ms;
  }
`;
const BotaoRemover = styled.button`
  border: 3px solid #ff5050;
  border-radius: 7px;
  opacity: 1;
  width: 60px;
  height: 40px;
  margin-left: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ff5050;
    color: white;
    transition: 150ms;
  }
`;
const ImagensBotoes = styled.img`
  display: inline;
  &:hover {
    cursor: pointer;
  }
  ${BotaoRemover}:hover & {
    display: none;
  } ;
`;
const ImagensBotoesHover = styled.img`
  display: none;
  &:hover {
    cursor: pointer;
  }

  ${BotaoRemover}:hover & {
    display: inline;
  } ;
`;

const DivTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 50px;
`;

const DivTituloTotal = styled.div`
  background: var(--unnamed-color-4a2f87) 0% 0% no-repeat padding-box;
  background: #4a2f87 0% 0% no-repeat padding-box;
  border-radius: 20px 20px 0px 0px;
  opacity: 1;
  color: white;
  font-weight: 600;
  width: 20vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivInformacoesTotal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 19.9vw;
  height: 20vh;
  min-height: 150px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 0.5px solid #707070;
  border-radius: 0px 0px 20px 20px;
  opacity: 1;
`;

const BotaoFinalizar = styled.button`
  border: 3px solid #e44e6d;
  border-radius: 7px;
  opacity: 1;
  width: 200px;
  height: 40px;
  margin-left: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: #e44e6d;
  box-shadow: 0px 3px 6px #00000024;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font: normal normal normal 16px/25px Poppins;
  letter-spacing: 0px;
  color: white;

  &:hover {
    color: #e44e6d;
    transition: 150ms;
    background-color: white;
  }
`;

const DivInfosTextoValor = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10%;
`;
const DivTextoTotal = styled.div`
  font-weight: 600;
  margin-left: 10%;
`;
const DivValorTotal = styled.div`
  font-weight: 400;
  margin-right: 10%;
`;

const QuebraLinha = styled.hr`
  width: 90%;
  opacity: 0.2;
`;
class Carrinho extends Component {
  render() {
    return (
      <div>
        <Header />
        <DivBody>
          <ContainerTitulo>
            <DivTitulo>Seu Carrinho</DivTitulo>
          </ContainerTitulo>
          <ContainerCarrinho>
            <DivTitulos>
              <Coluna1>
                <TextoTitulos>Imagem</TextoTitulos>
              </Coluna1>
              <Coluna2>
                <TextoTitulos>Nome do Produto</TextoTitulos>
              </Coluna2>
              <Coluna3>
                <TextoTitulos>Loja</TextoTitulos>
              </Coluna3>
              <Coluna4>
                <TextoTitulos>Quantidade</TextoTitulos>
              </Coluna4>
              <Coluna5>
                <TextoTitulos>Valor</TextoTitulos>
              </Coluna5>
              <Coluna6>
                <TextoTitulos>Ações</TextoTitulos>
              </Coluna6>
            </DivTitulos>
            <DivInfos>
              <Coluna1>Imagem</Coluna1>
              <Coluna2>Nomeeeeee</Coluna2>
              <Coluna3>Loja</Coluna3>
              <Coluna4>1</Coluna4>
              <Coluna5>R$ 500</Coluna5>
              <Coluna6>
                <DivBotoes>
                  <BotaoAdicionar>Adicionar Produto</BotaoAdicionar>
                  <BotaoRemover>
                    <ImagensBotoes src={trash}></ImagensBotoes>
                    <ImagensBotoesHover src={trashwhite}></ImagensBotoesHover>
                  </BotaoRemover>
                </DivBotoes>
              </Coluna6>
            </DivInfos>
            <DivTotal>
              <DivTituloTotal> Total da Compra</DivTituloTotal>
              <DivInformacoesTotal>
                <DivInfosTextoValor>
                  <DivTextoTotal>Total</DivTextoTotal>
                  <DivValorTotal>R$ 500</DivValorTotal>
                </DivInfosTextoValor>
                <QuebraLinha />
                <BotaoFinalizar>Finalizar Compra</BotaoFinalizar>
              </DivInformacoesTotal>
            </DivTotal>
          </ContainerCarrinho>
        </DivBody>
        <Footer />
      </div>
    );
  }
}

export default Carrinho;
