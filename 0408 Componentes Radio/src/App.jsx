import React from 'react';
import Radio from './Form/Radio';

const App = () => {
  const [cor, setCor] = React.useState('');

  return (
    <form>
      <Radio
        options={['azul', 'verde', 'amarelo']}
        value={cor}
        setValue={setCor}
      />
    </form>
  );
};

export default App;

