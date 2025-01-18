import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/sobre">Sobre</NavLink>
      </li>
    </ul>
  );
};

export default Header;
