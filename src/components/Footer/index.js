import React from "react";
import Icon1 from "../../assets/img/twitter.svg";
import Icon2 from "../../assets/img/facebook.svg";
import Icon3 from "../../assets/img/youtube.svg";
import Icon4 from "../../assets/img/skype.svg";
import Icon5 from "../../assets/img/pinterest.svg";
import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <h2 className="footer__title title">I’d Like to Learn More About Lymcoin</h2>
        <span className="line-block"></span>
        <form className="footer__form">
          <div className="footer__inputBlock">
            <label>
              <input className="footer__input" type="email" placeholder="Enter your Email" />
            </label>
            <label>
              <input className="footer__btn btn" type="button" value="sign in"/>
            </label>
          </div>
          <label>
            <input className="footer__checkbox" type="checkbox" />I have read and agree to the terms & conditions
          </label>
        </form>
        <ul className="footer__items">
          <li className="footer__item social">
            <img className="social__img" src={Icon1} alt="social-icon" />
          </li>
          <li className="footer__item social">
            <img className="social__img" src={Icon2} alt="social-icon" />
          </li>
          <li className="footer__item social">
            <img className="social__img" src={Icon3} alt="social-icon" />
          </li>
          <li className="footer__item social">
            <img className="social__img" src={Icon4} alt="social-icon" />
          </li>
          <li className="footer__item social">
            <img className="social__img" src={Icon5} alt="social-icon" />
          </li>
        </ul>
        <p className="footer__text">AncoraThemes © 2019. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
