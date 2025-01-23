import React from 'react';

const Exemplo = () => {
  function reducer(state, action) {
    switch (action.type) {
      case 'remover':
        return state.filter((fruta) => fruta !== action.content);
      case 'adicionar':
        return [...state, action.content];
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva']);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'remover', content: 'Banana' })}>
        Remover Banana
      </button>
      {state}
    </div>
  );
};

export default Exemplo;
