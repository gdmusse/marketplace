import React, {Component} from 'react'
import {Header, Footer} from '../../components'
import {Link} from 'react-router-dom'
import style from 'styled-components'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const contentStyle = {
  height: '60vh',
  color: '#fff',
  lineHeight: '60vh',
  textAlign: 'center',
  background: '#364d79',
  margin:'0' 
};

const FilterContainer = style.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 8vh;
    background: var(--unnamed-color-e44e6d) 0% 0% no-repeat padding-box;
    background: #E44E6D 0% 0% no-repeat padding-box;
    opacity: 1;
    color: #FFFFFF;
    font: Poppins;
    font-size: 10px;
`

const InputDiv = style.div`
    display: flex;
    flex-direction: column;
`
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
`
const SelectFilter = style.select`
    border: none;
    outline: none;
    border-bottom: 1px solid #FFFFFF;
    background: var(--unnamed-color-e44e6d) 0% 0% no-repeat padding-box;
    background: #E44E6D 0% 0% no-repeat padding-box;
    color: #FFFFFF;
    width: 100px;
`


class SliderHome extends Component {
    render (){
        return(
            <>
            <Header/>
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
                <FilterContainer>
                    <InputDiv>
                    <label>Produto</label>
                    <Field placeholder='Busque pelo nome'></Field>
                    </InputDiv>
                    <InputDiv>
                    <label>Valor Min.</label>
                    <Field placeholder='Ex: 10.00'></Field>
                    </InputDiv>
                    <InputDiv>
                    <label>Valor Max.</label>
                    <Field placeholder='Ex: 100.00'></Field>
                    </InputDiv>
                    <InputDiv>
                    <label>Ordenação</label>
                    <SelectFilter name='value'>
                    <option selected>Selecione</option>
                    <option value="min">Valor Min.</option>
                    <option value="max">Valor Max.</option>
                    </SelectFilter>
                    </InputDiv>
                </FilterContainer>
            <Footer/>
            </>
        )
    }
}

export default SliderHome