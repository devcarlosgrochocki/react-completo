import React from 'react';
import { Link, Outlet } from 'react-router';

const LoginCreate = () => {
  return (
    <div>
      <Outlet />
      <h2>LoginCreate</h2>
    </div>
  );
};

export default LoginCreate;
