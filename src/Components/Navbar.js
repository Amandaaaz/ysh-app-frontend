import React from 'react';
import logo from '../Assets/logo.png'; 
import login from '../Assets/login.png'; 
import menu from '../Assets/menu.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={menu} alt="ícone login" />
      </div>
      <div className="navbar-center">
        <img src={logo} alt="Logo da Empresa" />
      </div>
      <div className="navbar-right">
        <img src={login} alt="Ícone menu" />
      </div>
    </nav>
  );
}

export default Navbar;
