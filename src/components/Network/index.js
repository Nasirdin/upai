import React from "react";
import Img from "../../assets/img/img2.png";
import Icon1 from "../../assets/img/network1.svg";
import Icon2 from "../../assets/img/network2.svg";
import Icon3 from "../../assets/img/network3.svg";
import "./index.scss";

const Network = () => {
  return (
    <div className="network">
      <div className="container">
        <div className="minTitle">
          <span className="line-block"></span>
          <p>02. network</p>
        </div>
        <div className="network__container">
          <div className="network__content">
            <h2 className="network__title title">Growing Global Network</h2>
            <p className="network__subtitle">
              Lymcoin is rapidly gaining popularity among crypto community. Lots of real companies and exchanges have
              adopted our coin already. There is much more to come. Stay tuned.
            </p>
            <ul className="network__items">
              <li className="network__item">
                <p className="network__number">
                  50<span className="plus">+</span>
                </p>
                <p className="network__text">Exchanges</p>
              </li>
              <li className="network__item">
                <p className="network__number">
                  180<span className="plus">+</span>
                </p>
                <p className="network__text">Companies</p>
              </li>
            </ul>
            <ul className="network__imgs">
              <li className="network__Icons">
                <img src={Icon1} alt="network-icon" />
              </li>
              <li className="network__Icons">
                <img src={Icon2} alt="network-icon" />
              </li>
              <li className="network__Icons">
                <img src={Icon3} alt="network-icon" />
              </li>
            </ul>
          </div>
          <div className="network__img">
            <img src={Img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
