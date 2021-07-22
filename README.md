# Labenu - Semana 6

## Mock de dados

### Lista de Produtos (Informação de cada produto)

{
	id: 1,
	name: "Foguete da Missão Apollo 11",
	value: 10000.0,
	imageUrl: "https://picsum.photos/200/200",
}

### Lista de Produtos Selecionados (Carrinho)

{
	id: 1,
	quantidade: 2
}

## Mock de design

### Hierarquia de dados

- App
    - Carrinho
    - Card Produtos
        - Card Produto
    - Filtros

### Estado mínimo

- Filtro valor máximo (App)
- Filtro valor mínimo (App)
- Filtro nome (App)
- Ordenação (Card Produtos)
- Produtos selecionados (App)
