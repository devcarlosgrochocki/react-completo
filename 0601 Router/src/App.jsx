import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from './Sobre';
import Pagina404 from './Pagina404';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

