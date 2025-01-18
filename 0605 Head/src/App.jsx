import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router';
import Header from './Header';
import Home from "./Home"
import Sobre from "./Sobre"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="sobre" element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

