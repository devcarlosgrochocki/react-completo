import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form/Form';

const Teste = () => {
  const active = false;
  if (active) {
    return <p>Ativo</p>;
  } 
};

console.log(Object.prototype.toString.call(React.Fragment))

const App = () => {
  return (
    <>
      <Teste/>
      <Header />
      <Form/>
      <Footer/>
    </>
  );
};

export default App;

