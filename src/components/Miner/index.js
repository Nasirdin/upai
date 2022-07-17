import React from "react";
import Img from "../../assets/img/com.png";
import Icon1 from "../../assets/img/windows-8.svg";
import Icon2 from "../../assets/img/linux.svg";
import "./index.scss";

const Miner = () => {
  return (
    <div className="miner">
      <div className="container">
        <div className="miner__textContent">
          <div className="minTitle">
            <span className="line-block"></span>
            <p>02. miner</p>
          </div>
          <h2 className="miner__title title">Compatible GPU Miner<br/>Software</h2>
          <p className="miner__subtitle">Download one of these miners for your GPU</p>
          <ul className="miner__items">
            <li className="miner__item system">
              <img className="system__img" src={Icon1} alt="icon" />
              <div className="system__content">
                <h4 className="system__title titleh4">Windows Lymcoin Miner</h4>
                <span>Download</span>
              </div>
            </li>
            <li className="miner__item system">
              <img className="system__img" src={Icon2} alt="icon" />
              <div className="system__content">
                <h4 className="system__title titleh4">Linux Lymcoin Miner</h4>
                <span>Download</span>
              </div>
            </li>
          </ul>
          <ul className="miner__numItems">
            <li className="miner__numItem">
              <h2 className="miner__number title">87 278</h2>
              <p className="miner__text">Total miners</p>
            </li>
            <li className="miner__numItem">
              <h2 className="miner__number title">2.82 Tsol/s</h2>
              <p className="miner__text">Total hashrate</p>
            </li>
          </ul>
        </div>
        <div className="miner__img">
          <img src={Img} />
        </div>
      </div>
    </div>
  );
};

export default Miner;
