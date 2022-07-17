import React from "react";
import Img from "../../assets/img/img3.png";
import Icon1 from "../../assets/img/android.svg";
import Icon2 from "../../assets/img/apple.svg";
import Icon3 from "../../assets/img/windows-8.svg";
import Icon4 from "../../assets/img/linux.svg";
import "./index.scss";

const Wallets = () => {
  return (
    <div className="wallets">
      <div className="container">
        <div className="wallets__img">
          <img src={Img} alt="walet-img" />
        </div>
        <div className="walets__content">
          <div className="minTitle">
            <span className="line-block"></span>
            <p>02. Wallets</p>
          </div>
          <h2 className="wallets__title title">Lymcoin Wallets</h2>
          <div className="wallets__btns">
            <a className="wallets__btn btn" href="#">
              contuct us
            </a>
            <a className="wallets__btn btn btn_white" href="#">
              contuct us
            </a>
            <a className="wallets__btn btn btn_white" href="#">
              contuct us
            </a>
            <a className="wallets__btn btn btn_white" href="#">
              contuct us
            </a>
          </div>
          <ul className="wallets__items">
            <li className="wallets__item system">
              <img className="system__img" src={Icon1} alt="icon" />
              <div className="system__content">
                <h4 className="system__title titleh4">Android Lymcoin Wallet</h4>
                <span>Download</span>
              </div>
            </li>
            <li className="wallets__item system">
              <img className="system__img" src={Icon2} alt="icon" />
              <div className="system__content">
                <h4 className="system__title titleh4">OSX Lymcoin Wallet</h4>
                <span>Download</span>
              </div>
            </li>
            <li className="wallets__item system">
              <img className="system__img" src={Icon3} alt="icon" />
              <div className="system__content">
                <h4 className="system__title titleh4">Windows Lymcoin Wallet</h4>
                <span>Download</span>
              </div>
            </li>
            <li className="wallets__item system">
              <img className="system__img" src={Icon4} alt="icon" />
              <div className="system__content">
                <h4 className="system__title titleh4">Linux Lymcoin Wallet</h4>
                <span>Download</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Wallets;
