import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderFake = styled.div`
  height: 15vh;
  box-shadow: 0px 3px 6px #00000029;
`;
const DivBody = styled.div`
  width: 80vw;
  margin: auto;
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

const ContainerCarrinho = styled.div``;

const DivTitulos = styled.div`
  height: 60px;
  background: var(--unnamed-color-4a2f87) 0% 0% no-repeat padding-box;
  background: #4a2f87 0% 0% no-repeat padding-box;
  border-radius: 20px 20px 0px 0px;
  opacity: 1;
  display: flex;
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

const Table = styled.table`
  width: 100%;
`;
const TableHeaders = styled.th`
  font-weight: normal;
`;

class Carrinho extends Component {
  render() {
    return (
      <div>
        <HeaderFake>HEADER FAKE</HeaderFake>
        <DivBody>
          <ContainerTitulo>
            <DivTitulo>Seu Carrinho</DivTitulo>
          </ContainerTitulo>
          <ContainerCarrinho>
            <DivTitulos>
              <Table>
                <tr>
                  <TableHeaders>Imagem</TableHeaders>
                  <TableHeaders>Nome do Produto</TableHeaders>
                  <TableHeaders>Loja</TableHeaders>
                  <TableHeaders>Quantidade</TableHeaders>
                  <TableHeaders>Valor</TableHeaders>
                  <TableHeaders>Ações</TableHeaders>
                </tr>
              </Table>
            </DivTitulos>
            <DivInfos></DivInfos>
          </ContainerCarrinho>
        </DivBody>
      </div>
    );
  }
}

export default Carrinho;
