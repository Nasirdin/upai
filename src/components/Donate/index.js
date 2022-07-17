import React from "react";
import Ethereum from "../../assets/img/ethereum.svg";
import Bitcoin from "../../assets/img/bitcoin.svg";
import Qr from "../../assets/img/qrcode1.svg";
import "./index.scss";

const Donate = () => {
  return (
    <div className="donate">
      <div className="container">
        <div className="minTitle">
          <span className="line-block"></span>
          <p>02. team</p>
        </div>
        <h2 className="donate__title title">Donate to Support<br/>Development</h2>
        <p className="donate__subtitle">
          Lymcoin is not a pre-mined coin, so all of its development is funded by kind people like you.
        </p>
        <ul className="donate__items">
          <li className="donate__item card">
            <img className="card__img" src={Ethereum} alt="ethereum-icon" />
            <div className="card__box">
              <h4 className="card__address titleh4">177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</h4>
              <p className="card__text">Lymcoin Wallet Address</p>
            </div>
            <img className="card__qrcode" src={Qr} alt="qrcode" />
          </li>
          <li className="donate__item card">
            <img className="card__img" src={Bitcoin} alt="ethereum-icon" />
            <div className="card__box">
              <h4 className="card__address titleh4">177r3vCAH3AzABiQjFPmcrSCp6TDzEDuB1</h4>
              <p className="card__text">Lymcoin Wallet Address</p>
            </div>
            <img className="card__qrcode" src={Qr} alt="qrcode" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Donate;
