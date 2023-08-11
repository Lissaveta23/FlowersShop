import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li>
          <Link to={`/`}>О компании</Link>
        </li>
        <li>
          <Link to={`/`}>Контакты</Link>
        </li>
        <li>
          <Link to={`/`}>Доставка</Link>
        </li>
      </ul>
      <div className="footer__contacts">
        <p>8(999)999-99-99</p>
        <p>flowerHouse@gmail.com</p>
        <p>Самара, Молодогвардейская 244</p>
      </div>
      <div className="footer__info">
        <p>Режим работы</p>
        <p>Круглосуточно</p>
      </div>
    </footer>
  );
};

export default Footer;
