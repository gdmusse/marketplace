import React, { Component } from "react";
import "./App.css";
import {
  Home,
  CadastroCliente,
  Carrinho,
  LoginCliente,
  NovoProduto,
} from "./pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import { message, Button, Space } from "antd";

class App extends Component {
  state = {
    produtosNoCarrinho: [],
    carrinho: [],
  };

  adicionarProduto = (produto) => {
    var aux = this.state.produtosNoCarrinho;
    this.setState({ produtosNoCarrinho: aux + 1 });

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

  removerProduto = (produtoId) => {
    /* Para remover, a função precisa buscar todo o objeto, somente o id */
    var aux = [...this.state.carrinho];
    aux.map((produto, i) => {
      if (produto.id === produtoId) {
        var quantidade = produto.quantidade;
        if (quantidade - 1 == 0) {
          aux.splice(i, 1);
        } else {
          aux[i].quantidade--;
        }
      }
    });
    this.setState({ carrinho: aux });
  };

  totalCarrinho = () => {
    return this.state.carrinho.reduce((total, produto) => {
      return produto.price * produto.quantidade + total;
    }, 0);
  };

  realizarPagamento = () => {
    this.setState({ carrinho: [] });
    this.setState({ produtosNoCarrinho: [] });

    const warning = () => {
      message.warning("Finalizar compra é apenas uma simulação");
    };
    warning();
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <Home
                {...props}
                produtosNoCarrinho={this.state.carrinho}
                carrinho={this.state.carrinho}
                adicionarProduto={this.adicionarProduto}
                removerProduto={this.removerProduto}
              />
            )}
          />
          <Route
            path="/cadastro-cliente"
            render={(props) => (
              <CadastroCliente
                {...props}
                produtosNoCarrinho={this.state.carrinho}
                carrinho={this.state.carrinho}
              />
            )}
          />
          <Route
            path="/carrinho"
            render={(props) => (
              <Carrinho
                {...props}
                produtosNoCarrinho={this.state.carrinho}
                carrinho={this.state.carrinho}
                adicionarProduto={this.adicionarProduto}
                removerProduto={this.removerProduto}
                totalCarrinho={this.totalCarrinho}
                realizarPagamento={this.realizarPagamento}
              />
            )}
          />
          <Route
            path="/login-cliente"
            render={(props) => (
              <LoginCliente
                {...props}
                produtosNoCarrinho={this.state.carrinho}
                carrinho={this.state.carrinho}
              />
            )}
          />
          <Route
            path="/novo-produto"
            render={(props) => (
              <NovoProduto
                {...props}
                produtosNoCarrinho={this.state.carrinho}
                carrinho={this.state.carrinho}
              />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

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
