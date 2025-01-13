import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from "./Home"
import Sobre from './Sobre';
import Pagina404 from './Pagina404';
import Login from './Login';
import Produto from './Produto';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id" element={<Produto />} />
        <Route path="*" element={<Pagina404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

