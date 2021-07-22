import React from 'react'
import CardProduto from './CardProduto'

export default class ContainerProdutos extends React.Component {

    state = {
        ordenacao: ""
    }

    render(){
        return(
            <div className="ContainerProdutos">
                ContainerProdutos
                <CardProduto />
            </div>
        )
    }
}