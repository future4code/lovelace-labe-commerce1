# Labenu - Semana 6

## Mock de dados

### Lista de Produtos (Informação de cada produto)
```
{
	id: 1,
	name: "Foguete da Missão Apollo 11",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
}
```
### Lista de Produtos Selecionados (Carrinho)
```
{
	id: 1,
	quantidade: 2
}
```
## Mock de design

<img src="Screenshot from 2021-07-25 16-55-56.png">


### Hierarquia de dados

- App
    - Carrinho
    - Card Produtos
        - Card Produto
    - Filtros

### Estado mínimo

- filtroValorMaximo: String (App)
- filtroValorMinimo: String (App)
- filtroNome: String (App)
- ordenacao: String (Card Produtos)
- produtosSelecionados: Array de objetos (App)

### Props

- Card Filtro
    - setInput
- Card Produtos
    - listaProdutos
    - adicionarProdutosAoCarrinho
    - filtros (todos)
- Card Carrinho
    - produtosSelecionados
    - listaProdutos
    - removerProdutoCarrinho
