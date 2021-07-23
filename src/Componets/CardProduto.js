import React from 'react'
import Styled from 'styled-components'

const Card = Styled.div`
    transition: 0.3s;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 200px;
    margin-top: 1rem;
    text-align: center;

    height: 345px;
`
const Image = Styled.img`
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
`
const Price = Styled.p`
    color: grey;
    font-size: 18px;
`
const Description = Styled.div`
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`

const Button = Styled.button`
    margin-top: 10px;
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #222;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-weight:700;
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
                <Description>
                    <h4>{name}</h4>
                    <Price>R$: {value}</Price>
                </Description>
                <Button onClick={() => this.props.adicionarProdutosAoCarrinho(id)}>
                    Adicionar ao carrinho
                </Button>
            </Card>
        )
    }
}
