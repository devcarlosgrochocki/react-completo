import React from 'react';
import "./Header.css"
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | <NavLink to="/sobre">Sobre</NavLink> | <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Header;
