import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Carousel } from "antd";

const contentStyle = {
  height: "60vh",
  color: "#fff",
  lineHeight: "60vh",
  textAlign: "center",
  background: "#364d79",
  margin: "0",
};



class SliderHome extends Component {
  render() {
    return (
      <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>Lorem Ipsum</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Lorem Ipsum</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Lorem Ipsum</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Lorem Ipsum</h3>
          </div>
        </Carousel>
        
        
      </div>
    );
  }
}

export default SliderHome;
