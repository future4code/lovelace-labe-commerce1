import React from 'react';
import './App.css';
import ContainerCarrinho from './Componets/ContainerCarrinho';
import ContainerFiltro from './Componets/ContainerFiltro';
import ContainerProdutos from './Componets/ContainerProdutos';

function App() {
  return (
    <div className="App">
      <ContainerFiltro />
      <ContainerProdutos />
      <ContainerCarrinho />
    </div>
  );
}

export default App;
