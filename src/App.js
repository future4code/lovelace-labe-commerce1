import React from 'react';
import './App.css';
import ContainerCarrinho from './Componets/ContainerCarrinho';
import ContainerFiltro from './Componets/ContainerFiltro';
import ContainerProdutos from './Componets/ContainerProdutos';

const listaProdutos = [
  {
    id: 1,
    name: "Foguete da Missão Lindo 11",
    value: 10.0,
    imageUrl: "https://picsum.photos/201",
  },
  {
    id: 2,
    name: "Avião da Missão Apollo 11",
    value: 20.0,
    imageUrl: "https://picsum.photos/202",
  },
  {
    id: 3,
    name: "Barco da Missão Apollo 11",
    value: 30.0,
    imageUrl: "https://picsum.photos/200",
  },
  {
    id: 4,
    name: "Capacete",
    value: 5.0,
    imageUrl: "https://picsum.photos/205",
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

  adicionarProdutosAoCarrinho = async (id) => {

    const jaAdicionado = this.state.produtosSelecionados.some( produto => {
      return produto.id===id 
    })

    if( !jaAdicionado ){
      const novoItem = {id, quantidade: 0}
      const listaComItem = [...this.state.produtosSelecionados, novoItem]
      await this.setState({ produtosSelecionados: listaComItem })
    } 

    const novaLista = this.state.produtosSelecionados.map( produto => {
      if(id === produto.id)
        return { ...produto, quantidade: produto.quantidade+1 }

      return produto
    })

    await this.setState({ produtosSelecionados: novaLista })
  }
  removerProdutoCarrinho = async (id) => {

    const [produtoARemover] = this.state.produtosSelecionados.filter(produto => {
      return id===produto.id
    })

    let novaLista 

    if(produtoARemover.quantidade===1){
      novaLista = this.state.produtosSelecionados.filter(produto => {
        return id!==produto.id
      })
    }
    else{
      novaLista = this.state.produtosSelecionados.map(produto => {

        if(id===produto.id)
          return {...produto, quantidade: produto.quantidade-1}
        else
          return produto
      })
    }

    this.setState({ produtosSelecionados: novaLista})
  }
  setInput = async ob => {
    await this.setState(ob)
  }

  render(){
    return (
      <div className="App">
        <ContainerFiltro  
          setInput={this.setInput}
          filtros={{    
            filtroValorMaximo: this.state.filtroValorMaximo,
            filtroValorMinimo: this.state.filtroValorMinimo,
            filtroNome: this.state.filtroNome,
          }}
        />

        <ContainerProdutos
          listaProdutos={listaProdutos}
          adicionarProdutosAoCarrinho={this.adicionarProdutosAoCarrinho}
          filtros={{    
            filtroValorMaximo: this.state.filtroValorMaximo,
            filtroValorMinimo: this.state.filtroValorMinimo,
            filtroNome: this.state.filtroNome,
          }}
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
