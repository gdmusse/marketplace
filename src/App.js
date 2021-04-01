import React, {Component} from 'react';
import './App.css'; 
import {Home, CadastroCliente, Carrinho, LoginCliente, NovoProduto} from './pages'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'




class App extends Component {
	
	state = {
		produtosNoCarrinho: [],
		carrinho: [], 
	}
	
	adicionarProduto = (produto) => {
		var aux = this.state.produtosNoCarrinho
		this.setState({produtosNoCarrinho: aux + 1})

		const indiceProduto = this.state.carrinho.findIndex((item) => {
			return item.id === produto.id;
		  });
		  const novoCarrinho = [...this.state.carrinho];
		  if (indiceProduto >= 0) {
			novoCarrinho[indiceProduto].quantidade++;
		  } else {
			const novoProduto = { ...produto, quantidade: 1 };
			novoCarrinho.push(novoProduto);
		  }
		  this.setState({ carrinho: novoCarrinho });
	};


	render () {

		return (
			<Router>
				<Switch>
					<Route path='/' exact render={(props) => <Home {...props} produtosNoCarrinho={this.state.produtosNoCarrinho} carrinho={this.state.carrinho} adicionarProduto={this.adicionarProduto} />} />
					<Route path='/cadastro-cliente' component={CadastroCliente} />
					<Route path='/carrinho'  render={(props) => <Carrinho {...props} produtosNoCarrinho={this.state.produtosNoCarrinho} carrinho={this.state.carrinho} />}  />
					<Route path='/login-cliente'/>
					<Route path='/novo-produto' component={NovoProduto} />
				</Switch>
			</Router>
		)		
	}
}

export default App




	// AddProdutoNoCarrinho = (produtoId) =>{
	// 	const produtoNoCarrinho = this.state.produtosNoCarrinho.fing(produto => produtoId === produto.id)

	// 	if(produtoNoCarrinho) {
	// 		const novoProdutoNoCarrinho = this.state.produtosNoCarrinho.map(produto => {
	// 			if(produtoId === produto.id){
	// 				return {
	// 					...produto,
	// 					quantidade: produto.quantidade + 1
	// 				}
	// 			}
	// 			return produto
	// 		});
	// 		this.setState({produtosNoCarrinho: novoProdutoNoCarrinho})
	// 	} else {
	// 		const produtoParaAdd = this.state.listaDeProdutos.find(produto => produtoId === produto.id)
	// 		const novoProdu
	// 	}
