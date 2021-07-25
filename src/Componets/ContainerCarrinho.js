import React from 'react'
import styled from 'styled-components'

//estilo do container 
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 
const TituloCarrinho = styled.p`
    font-size: 24px;
    font-weight: bolder;
    margin-left: 10px;
    margin-top: 15px;

`
const ValorTotal = styled.p`
    margin-top: 20px;
    margin-left: 10px;
    font-size: 18px;
` 
const BotaoRemover = styled.button`
    padding: 4px 5px;
    background-color: black;
    color: #fff;
    text-decoration:none;
    border:1px solid black;
    border-radius:4px;
    display:inline-block;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 10px;
    font-size: 15px;
    width: 100%;
    opacity: .5;

    &:hover{
     background-color: red;
     color: #fff;
     border:1px solid red;
    }
    
`
const TelaNova = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{       
       font-size: 16px;
        display: flex;
        margin-left: 10px;
        margin-top: 10px;
    }
`
const Informacao = styled.div`
display: flex;
flex-direction: column;
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: .7rem;
`

class ContainerCarrinho extends React.Component {
  
    render(){
        return(
            <Container>
                <Informacao>
                    <TituloCarrinho>Carrinho:</TituloCarrinho>                
                    <TelaNova>                                                          
                        {
                            this.props.produtosSelecionados &&
                            this.props.produtosSelecionados.map( produtoSelecionado => {
                                const id = produtoSelecionado.id
                                const quantidade = produtoSelecionado.quantidade
                                const [produtoDados] = this.props.listaProdutos.filter( produto => produto.id===id )

                                return <Item key={id}>
                                        <br/>
                                        <p>
                                        {`${quantidade}x ${produtoDados.name}`}
                                        </p>
                                        <BotaoRemover onClick={() => this.props.removerProdutoCarrinho(id)}>Remover</BotaoRemover>
                                    </Item>
                            })
                        }
                </TelaNova>
            </Informacao>
                {/* <ValorTotal>  
                    Valor Total: R$ {this.props.produtosSelecionados.reduce((Prev, produto) => {
                        return Prev + produto.value * produto.quantidade;
                    },0)}
                </ValorTotal> */}
        </Container>
        )
    }
}
export default ContainerCarrinho;
