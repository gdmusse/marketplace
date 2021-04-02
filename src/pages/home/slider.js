import React, { Component } from "react";
import { Link } from "react-router-dom";
import Elo4Bannner from "../../imagens/banners/elo4.png";
import Cosmetic from "../../imagens/banners/cosmetic.png";
import Botanical from "../../imagens/banners/botanical.png";
import Eyewear from "../../imagens/banners/eyewear.png";
import Fitness from "../../imagens/banners/fitness.png"
import styled from "styled-components";
import "antd/dist/antd.css";
import { Carousel } from "antd";

const contentStyle = {
  width: "100%",
  height: "90vh",
  color: "#000",
  lineHeight: "60vh",
  textAlign: "center",
  margin: "auto",
  background: "green"
};


const BannerImage = styled.img`
  width: auto;
`



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
        
        
      </div>
    );
  }
}

export default SliderHome;
