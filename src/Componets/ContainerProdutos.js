import React from 'react'
import CardProduto from './CardProduto'
import Styled from 'styled-components'

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    width:100%;
`
const Board = Styled.div`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    margin: 2rem 0;
    padding: 1rem 0;
`
const Header = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
`
const FiltroOrdenacao = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 55px;
`

export default class ContainerProdutos extends React.Component {

    state = {
        ordenacao: ""
    }

    adicionarProdutoAoCarrinho = (id) => {
        this.props.adicionarProdutoAoCarrinho(id)
    }
    onChangeOrdenacao = event => {
        this.setState({ ordenacao: event.target.value })
    }

    render(){

        const {filtroValorMaximo, filtroValorMinimo, filtroNome} = this.props.filtros

        const listaFiltrada = this.props.listaProdutos
        .filter( produto => {
            if(!filtroValorMaximo) return true
            return produto.value<=filtroValorMaximo

        }).filter( produto => {
            if(!filtroValorMinimo) return true
            return produto.value>=filtroValorMinimo
        
        }).filter(produto => {
            if(!filtroNome) return true
            return produto.name.toLowerCase().includes(filtroNome.toLowerCase())
        
        }).sort((produtoUm, produtoDois) => {
            if(produtoUm.value===produtoDois.value || !this.state.ordenacao) 
                return 0
            else if( produtoDois.value>produtoUm.value )
                return this.state.ordenacao==="crescente"? -1 : 1
            else
                return this.state.ordenacao==="crescente"? 1 : -1

        })


        return(
            <div className="ContainerProdutos">
                <Container>
                    <Header>
                        <h2>Produtos disponíveis: {this.props.listaProdutos.length}</h2>
                        <FiltroOrdenacao>
                            <label>Ordenar por valor </label>
                            <select name='ordenacao' onChange={this.onChangeOrdenacao}>
                                <option value="">Nunhum</option>
                                <option value="crescente">Crescente</option>
                                <option value="decrescente">Decrescente</option>
                            </select>
                        </FiltroOrdenacao>
                    </Header>
                    <Board> 
                        {
                            listaFiltrada.map((produto, index) => {
                                return (
                                    <CardProduto 
                                        key={index}
                                        produto={produto}
                                        adicionarProdutoAoCarrinho={this.adicionarProdutoAoCarrinho}
                                    />
                                );
                            })
                        }
                    </Board>
                </Container>
            </div>
        )
    }
}