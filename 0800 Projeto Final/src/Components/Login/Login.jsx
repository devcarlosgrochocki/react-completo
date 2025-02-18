import React from 'react';
import { Outlet } from 'react-router';

const Login = () => {
  return (
    <div>
      <h1>TELA LOGIN</h1>
      <Outlet />
    </div>
  );
};

export default Login;
