import React from 'react';
import { Suspense } from 'react';
const Contato = React.lazy(() => import('./Contato'));

const App = () => {
  const [active, setActive] = React.useState(false)

  return (
    <div>
      <h1>Meu App</h1>
      <button onClick={() => setActive(!active)}>Clique</button>
      {active && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </Suspense>
      )}
    </div>
  );
};
export default App;
