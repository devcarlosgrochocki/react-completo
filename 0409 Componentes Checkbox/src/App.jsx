import React from 'react';
import Checkbox from './Form/Checkbox';

const App = () => {
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <form>
      <Checkbox
        options={['Uva', 'Laranja', 'Limão']}
        value={fruta}
        setValue={setFruta}
      />

      <Checkbox
        options={['Termos e Condições']}
        value={termos}
        setValue={setTermos}
      />
    </form>
  );
};
export default App;

