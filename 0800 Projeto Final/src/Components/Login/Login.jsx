import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router';

const Login = () => {
  return (
    <div>
      <Link to="">LOGIN FORM</Link> {' | '}
      <Link to="criar">LOGIN CREATE</Link>
      <h1>Área de Login</h1>
      <Outlet />
    </div>
  );
};

export default Login;
