import React from 'react'
import {Home, CadastroCliente, Carrinho, LoginCliente, NovoProduto} from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
	return (
        <Router>
			<Switch>
				<Route path='/' exact component={Home}/>
				<Route path='/cadastro-cliente' component={CadastroCliente}/>
				<Route path='/carrinho' component={Carrinho}/>
				<Route path='/login-cliente' component={LoginCliente}/>
				<Route path='/novo-produto' component={NovoProduto}/>
			</Switch>
		</Router>
	)
}

export default App
