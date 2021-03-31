import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import SliderHome from './slider'
import ListaProdutos from './produtos'

class Home extends Component {
    render (){
        return(
            <div>
                <SliderHome/>
                <ListaProdutos/>
            </div>
        )
    }
}

export default Home