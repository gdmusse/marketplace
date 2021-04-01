import React, { Component } from "react";
import { Link } from "react-router-dom";
import Elo4Bannner from "../../imagens/banners/elo4.png";
import Cosmetic from "../../imagens/banners/cosmetic.png";
import Botanical from "../../imagens/banners/botanical.png";
import Eyewear from "../../imagens/banners/eyewear.png";
import Fitness from "../../imagens/banners/fitness.png"
import style from "styled-components";
import "antd/dist/antd.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "80vh",
  color: "#000",
  lineHeight: "60vh",
  textAlign: "center",
  margin: "auto",
  background: "green"
};

const BannerImage = style.img`
  width: 80vw;
`

const ColorFilter = style.div`
    height: 8vh;
    width: 80vw;
    background: var(--unnamed-color-e44e6d) 0% 0% no-repeat padding-box;
    background: #E44E6D 0% 0% no-repeat padding-box;
    margin: auto;
`

const FilterContainer = style.div`
    display: flex;
    height: 8vh;
    justify-content: space-evenly;
    align-items: center;
    width: 80vw;
    opacity: 1;
    color: #FFFFFF;
    font: Poppins;
    font-size: 11px;
    margin: auto;
    width: 80vw;
    margin: auto;
`;

const InputDiv = style.div`
    display: flex;
    flex-direction: column;
`;
const Field = style.input`
    border: none;
    outline: none;
    border-bottom: 1px solid #FFFFFF;
    background: var(--unnamed-color-e44e6d) 0% 0% no-repeat padding-box;
    background: #E44E6D 0% 0% no-repeat padding-box;
    color: #FFFFFF;
    
    ::-webkit-input-placeholder{

        color: #FFFFFF;
        
      }
`;
const SelectFilter = style.select`
    border: none;
    outline: none;
    border-bottom: 1px solid #FFFFFF;
    background: var(--unnamed-color-e44e6d) 0% 0% no-repeat padding-box;
    background: #E44E6D 0% 0% no-repeat padding-box;
    color: #FFFFFF;
    width: 100px;
`;

class SliderHome extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>
            <Link to="/cadastro-cliente">
              <BannerImage src={Elo4Bannner} alt="banner_elo4" style={contentStyle}/>
            </Link>
          </div>
          <div>
            <Link to="/cadastro-cliente">
              <BannerImage src={Cosmetic} alt="cosmetic-banner" style={contentStyle}/>
            </Link>
          </div>
          <div>
            <Link to="/cadastro-cliente">
              <BannerImage src={Botanical} alt="botanical-banner" style={contentStyle}/>
            </Link>
          </div>
          <div>
            <Link to="/cadastro-cliente">
              <BannerImage src={Eyewear} alt="eyewear-banner" style={contentStyle}/>
            </Link>
          </div>
          <div>
            <Link to="/cadastro-cliente">
              <BannerImage src={Fitness} alt="fitness-banner" style={contentStyle}/>
            </Link>
          </div>
        </Carousel>
        
          <ColorFilter>
            <FilterContainer>
              <InputDiv>
                <label>Produto</label>
                <Field placeholder="Busque pelo nome"></Field>
              </InputDiv>
              <InputDiv>
                <label>Valor Min.</label>
                <Field placeholder="Ex: 10.00"></Field>
              </InputDiv>
              <InputDiv>
                <label>Valor Max.</label>
                <Field placeholder="Ex: 100.00"></Field>
              </InputDiv>
              <InputDiv>
                <label>Ordenação</label>
                <SelectFilter name="value">
                  <option selected>Selecione</option>
                  <option value="min">Valor Min.</option>
                  <option value="max">Valor Max.</option>
                </SelectFilter>
              </InputDiv>
            </FilterContainer>
          </ColorFilter>
        
      </div>
    );
  }
}

export default SliderHome;
