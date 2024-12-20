import React from 'react';
import Produto from './Produto';

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = localStorage.getItem('produto');
    if (produtoLocal !== 'null') {
      setProduto(produtoLocal);
    }
  }, []);

  React.useEffect(() => {
    if (produto !== null) {
      localStorage.setItem('produto', produto);
    }
  }, [produto]);

  function handleClick(e) {
    setProduto(e.target.innerText);
  }

  return (
    <>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={produto} />
    </>
  );
};

export default App;

