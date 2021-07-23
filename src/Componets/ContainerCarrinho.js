import React from 'react'
import styled from 'styled-components'

//estilo do container 
const Container = styled.div`
    border: 1px solid #000;
    margin-top: 35px;
    margin-left: 15px;
    width: 240px;
    height: 801px;
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
    width: 40%;

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
class ContainerCarrinho extends React.Component {

  
    render(){
        console.log(this.props.produtosSelecionados, "o que é")
        return(
           <Container>
               <Informacao>
                 <TituloCarrinho>Carrinho:</TituloCarrinho>                
                 <TelaNova>
                      {this.props.produtosSelecionados.map(produto => 
                    <>    
                    <p>{produto.name}</p>                    
                    <p>R$: {produto.value},00</p>   
                    <p>Qtd: {produto.quantidade}x</p>             

                    <BotaoRemover onClick = {() => this.props.removerProdutoCarrinho(produto.id)}>
                    Remover
                   </BotaoRemover>                       
                   </>                
                     )}
          </TelaNova>
                </Informacao>
                <ValorTotal>  
                    Valor Total: R$ {this.props.produtosSelecionados.reduce((Prev, produto) => {
                        return Prev + produto.value * produto.quantidade;
                    },0)}
                </ValorTotal>
            </Container>
        )
    }
}
export default ContainerCarrinho;
