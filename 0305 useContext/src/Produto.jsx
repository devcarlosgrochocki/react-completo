import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <p>
      Total: {global.carrinho}:{' '}
      <button onClick={() => global.setCarrinho(global.carrinho + 1)}>
        Adicionar
      </button>
      <button onClick={() => global.limparDados()}>Remover</button>
    </p>
  );
};

export default Produto;
