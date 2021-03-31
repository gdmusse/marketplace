import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import SliderHome from './slider'
import ListaProdutos from './produtos'
import {Header, Footer} from '../../components'

class Home extends Component {
    render (){
        return(
            <div>
                <Header/>
                <SliderHome/>
                <ListaProdutos/>
                <Footer/>
            </div>
        )
    }
}

export default Home