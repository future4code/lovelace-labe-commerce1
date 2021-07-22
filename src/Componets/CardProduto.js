import React from 'react'
import Styled from 'styled-components'

const Card = Styled.div`
    width: 300px;
    height: 350px;
    transition: 0.3s;
    border: 1px solid black;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
const Image = Styled.img`
    width: 100%;
    height: 70%;
`


export default class CardProduto extends React.Component {
    render(){

        const {id,name,value,imageUrl} = this.props.produto

        return(
            <Card>
                <Image 
                    src={imageUrl} 
                    alt={name}
                />
                <div>
                    <p>{name}</p>
                    <p>R$: {value}</p>
                </div>
                <button onClick={() => this.props.adicionarProdutoAoCarrinho(id)}>
                    Adicionar ao carrinho
                </button>
            </Card>
        )
    }
}
