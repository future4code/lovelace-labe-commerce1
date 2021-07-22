import React from 'react';
import './App.css';
import ContainerCarrinho from './Componets/ContainerCarrinho';
import ContainerFiltro from './Componets/ContainerFiltro';
import ContainerProdutos from './Componets/ContainerProdutos';

const listaProdutos = [
  {
    id: 1,
    name: "Foguete da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    name: "Barco da Missão Apollo 11",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/201",
  }
]

class App extends React.Component {

  state = {
    filtroValorMaximo: "",
    filtroValorMinimo: "",
    filtroNome: "",
    produtosSelecionados: [
      {
        id: 1,
        quantidade: 2
      },
      {
        id: 2,
        quantidade: 5
      }
    ]
  }

  setInput = id => {

  }

  render(){
    return (
      <div className="App">
        <ContainerFiltro  
          setInput={this.setInput}
        />

        <ContainerProdutos
          listaProdutos={this.listaProdutos}
          adicionarProdutosAoCarrinho={this.adicionarProdutosAoCarrinho}
          // filtros={{this.state.filtroValorMaximo, this.state.filtroValorMinimo, this.state.filtroNome}}
        />

        <ContainerCarrinho
          produtosSelecionados={this.state.produtosSelecionados}
          listaProdutos={listaProdutos}
          removerProdutoCarrinho={this.removerProdutoCarrinho}
        />
      </div>
    );
  }
}

export default App;
