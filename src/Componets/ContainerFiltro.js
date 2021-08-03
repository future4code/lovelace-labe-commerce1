import React from 'react'
import Styled from 'styled-components'

const Card = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`

export default class ContainerFiltro extends React.Component {

    onChangeFiltroValorMaximo = event => {
        this.props.setInput({filtroValorMaximo: Number(event.target.value)})
    }
    onChangeFiltroValorMinimo = event => {
        this.props.setInput({filtroValorMinimo: Number(event.target.value)})
    }
    onChangeFiltroNome = event => {
        this.props.setInput({filtroNome: event.target.value})
    }

    render(){
        return(
            <div className='ContainerFiltro'>
                                <Card>
                    <h2>Filtros</h2>
                    
                    <label>Valor máximo</label>
                    <input onChange={this.onChangeFiltroValorMaximo}/>

                    <label>Valor mínimo</label>
                    <input onChange={this.onChangeFiltroValorMinimo}/>

                    <label>Filtrar por nome</label>
                    <input onChange={this.onChangeFiltroNome}/>
                </Card>
            </div>
        )
    }
}