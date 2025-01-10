import React from 'react';

import './App.css';
import Slide from './Slide';

const App = () => {
  const slides = [
    {
      id: 'slide1',
      conteudo: 'Slide 1',
    },
    {
      id: 'slide2',
      conteudo: 'Slide 2',
    },
    {
      id: 'slide3',
      conteudo: 'Slide 3',
    },
  ];

  return <Slide slides={slides} />;
};

export default App;

