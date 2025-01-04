import React from 'react';

const App = () => {
  const [select, setSelect] = React.useState('');
  function handleChange(event) {
    setSelect(event.target.value)
  }

  return (
    <form>
      <select onChange={handleChange}>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
      </select>
      <p>{select}</p>
    </form>
  );
};

export default App;

