import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__brand" to="/home">
        Weather
      </Link>
      <nav className="header__nav nav">
        <Link to="/home" className="nav__item">
          Home
        </Link>
        <Link to="/weather" className="nav__item">
          Weather
        </Link>
      </nav>
    </div>
  );
};

export default Header;
