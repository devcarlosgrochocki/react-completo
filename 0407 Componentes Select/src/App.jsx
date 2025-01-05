import React from 'react';
import Select from './Form/Select';

const App = () => {

  const [produto, setProduto] = React.useState("")

  return (
    <form>
      <Select options={["Smartphone", "Tablet", "TV"]} value={produto} setValue={setProduto}/>
      <button>Enviar</button>
    </form>
  );
};

export default App;

