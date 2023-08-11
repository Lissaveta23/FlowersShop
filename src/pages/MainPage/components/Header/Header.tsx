import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header_nav">
        <Link to={`/`}>О нас</Link>
        <Link to={`/`}>Букеты</Link>
        <Link to={`/basket`}>Корзина</Link>
      </nav>
    </header>
  );
};

export default Header;
