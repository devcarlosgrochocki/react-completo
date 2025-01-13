import React from 'react';
import "./Header.css"
import { NavLink, useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation()

  React.useEffect(() => {
    const search = new URLSearchParams(location.search)
    console.log(search.get("q"))
    console.log("Toda vez que a rota mudar")
  }, [location])

  return (
    <nav>
      <NavLink to="/">Home</NavLink> | <NavLink to="/sobre">Sobre</NavLink> | <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default Header;
