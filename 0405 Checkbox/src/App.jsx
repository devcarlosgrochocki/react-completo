import React from 'react';

const App = () => {
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  const [cores, setCores] = React.useState(['azul']);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor} style={{textTransform: "capitalize"}}>
          <input type="checkbox" value={cor} onChange={handleChange} checked={handleChecked(cor)}/>
          {cor}
        </label>
      ))}
    </form>
  );
};

export default App;
