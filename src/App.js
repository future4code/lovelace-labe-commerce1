import React from 'react';
import './App.css';

import ContainerCarrinho from './Componets/ContainerCarrinho';
import ContainerFiltro from './Componets/ContainerFiltro';
import ContainerProdutos from './Componets/ContainerProdutos';



class App extends React.Component {

  state = {
 listaProdutos:  [
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
    ],
    filtroValorMaximo: "",
    filtroValorMinimo: "",
    filtroNome: "",
    carrinho: []  
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (this.state.produtosSelecionados !== prevState.produtosSelecionados) {
      localStorage.setItem( 'produtos_selecionados', JSON.stringify(this.state.produtosSelecionados) )
    }
  }

  componentDidMount(){
    const produtos_selecionados = JSON.parse(localStorage.getItem('produtos_selecionados'))
    this.setState({ produtosSelecionados: produtos_selecionados })
  }

  adicionarProdutosAoCarrinho = async (id) => {
    //recebendo estado do carrinho  
    let produtoCarrinho = this.state.carrinho;
    //verificando se o carrinho estar vazio 
    let carrinhoCheio = produtoCarrinho.findIndex(produto => produto.id === id ) 
    if(carrinhoCheio === -1){
      const itemCarrinho = this.state.listaProdutos.find(item => item.id === id )

      const addCarrinho = {
        id: itemCarrinho.id,
        value: itemCarrinho.value,
        name: itemCarrinho.name,
        quantidade: 1
      }
      produtoCarrinho.push(addCarrinho)
      console.log(produtoCarrinho,"carrinho")
    }else{
      const qtde = produtoCarrinho[carrinhoCheio].quantidade
      produtoCarrinho[carrinhoCheio] = {
        ...produtoCarrinho[carrinhoCheio],quantidade: qtde + 1 
        
      }    

    await this.setState({carrinho: produtoCarrinho})
    }
    
    
  


    // const jaAdicionado = this.state.produtosSelecionados.some( produto => {
    //   return produto.id===id 
    // })

    // if( !jaAdicionado ){
    //   const novoItem = {id, quantidade: 0}
    //   const listaComItem = [...this.state.produtosSelecionados, novoItem]
    //   await this.setState({ produtosSelecionados: listaComItem })
    // } 

    // const novaLista = this.state.produtosSelecionados.map( produto => {
    //   if(id === produto.id)
    //     return { ...produto, quantidade: produto.quantidade+1 }

    //   return produto
    // })

    // await this.setState({ produtosSelecionados: novaLista })
    // 
  }
<<<<<<< HEAD
  
  
=======

  removerProdutoCarrinho = async (id) => {
>>>>>>> 566e0f7019af37c0eef84ff8a2b385d208a554fe



   removerProdutoCarrinho = async (id) => {
     const [produtoARemover] = this.state.carrinho.filter(produto => {
       return id===produto.id
    })

    let novaLista 

     if(produtoARemover.quantidade===1){
       novaLista = this.state.carrinho.filter(produto => {
        return id!==produto.id
       })
     }
     else{
      novaLista = this.state.carrinho.map(produto => {

        if(id===produto.id)
           return {...produto, quantidade: produto.quantidade-1}
        else
          return produto
       })
    }

     this.setState({ carrinho: novaLista})
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
          listaProdutos={this.state.listaProdutos}
          adicionarProdutosAoCarrinho={this.adicionarProdutosAoCarrinho}
          filtros={{    
            filtroValorMaximo: this.state.filtroValorMaximo,
            filtroValorMinimo: this.state.filtroValorMinimo,
            filtroNome: this.state.filtroNome,
          }}
        />

        <ContainerCarrinho
          produtosSelecionados={this.state.carrinho}
          listaProdutos={this.state.listaProdutos}
          removerProdutoCarrinho={this.removerProdutoCarrinho}
        />
      </div>
    );
  }
}

export default App;
