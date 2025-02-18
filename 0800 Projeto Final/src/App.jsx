import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import LoginForm from './Components/Login/LoginForm';
import LoginCreate from './Components/Login/LoginCreate';
import LoginPasswordLost from './Components/Login/LoginPasswordLost';
import LoginPasswordReset from './Components/Login/LoginPasswordReset';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />}>
            <Route path="" element={<LoginForm />} />
            <Route path="criar" element={<LoginCreate />} />
            <Route path="perdeu" element={<LoginPasswordLost />} />
            <Route path="resetar" element={<LoginPasswordReset />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

