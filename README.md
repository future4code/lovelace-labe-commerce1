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


## O que funciona

- Home
    - Mostrando todos os produtos
    - Deve haver alguma forma de ordenar os produtos por ordem crescente ou decrescente de preço (pode ser na home em si ou junto dos filtros)
    - Produtos:
        - Devem ter um botão que permita adicioná-los ao carrinho
        - Devem exibir o nome, preço e imagem em um card
- Carrinho
    - Mostrar todos os produtos e quantidades adicionadas
    - Capacidade de remover itens do carrinho
    - Mostrar o valor total do carrinho
- Filtro
    - Por valor mínimo e máximo
    - Por nome do produto
- Salvar e Recuperar conteúdo do carrinho usando o LocalStorage

## Surge
https://grey-neck.surge.sh/
