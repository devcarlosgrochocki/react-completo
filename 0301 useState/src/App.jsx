import React from 'react';
import Produto from './Produto';

const App = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event) {
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText.toLowerCase()}`,
    );
    console.log(response);
    const json = await response.json();
    setDados(json);
    setCarregando(false)
  }

  return (
    <div>
      <button style={{ marginRight: '10px' }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ marginRight: '10px' }} onClick={handleClick}>
        Smartphone
      </button>
      <button style={{ marginRight: '10px' }} onClick={handleClick}>
        Tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default App;

