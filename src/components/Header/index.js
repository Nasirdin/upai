import React, { useState } from "react";
import Logo from "../../assets/img/logo.svg";
import "./index.scss";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <div className="header">
      <div className="first-container">
        <div className="header__logo">
          <img src={Logo} alt="logotype" />
        </div>
        <ul className={`header__items ${!burgerActive ? "" : "active"}`}>
          <li className="header__item">
            <img src={Logo} alt="logotype" />
          </li>
          <li className="header__item">
            <a href="#">home</a>
          </li>
          <li className="header__item">
            <a href="#">resources</a>
          </li>
          <li className="header__item">
            <a href="#">team</a>
          </li>
          <li className="header__item">
            <a href="#">features</a>
          </li>
          <li className="header__item">
            <a href="#">community</a>
          </li>
          <li className="header__item">
            <a href="#">downloads</a>
          </li>
          <li className="header__item header__item_blue">
            <a href="#">contuct us</a>
          </li>
        </ul>
        
        <span
          className={`header__burger ${!burgerActive ? "" : "active"}`}
          onClick={() => {
            setBurgerActive(!burgerActive);
          }}
        ></span>
      </div>
    </div>
  );
};

export default Header;
