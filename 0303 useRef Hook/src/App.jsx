import React from 'react';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificacao] = React.useState(null);
  const refNotificacao = React.useRef;

  function handleClick() {
    setCarrinho((prev) => prev + 1);
    setNotificacao('Adicionado no carrinho');
    clearInterval(refNotificacao.current);
    refNotificacao.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
  }

  return (
    <>
      {notificacao && <p>{notificacao}</p>}
      <button onClick={handleClick}>Adicionar Item - {carrinho}</button>
    </>
  );
};

export default App;

