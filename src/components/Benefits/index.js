import React from "react";
import Icon1 from "../../assets/img/icon1.svg";
import Icon2 from "../../assets/img/icon2.svg";
import Icon3 from "../../assets/img/icon3.svg";
import Icon4 from "../../assets/img/icon4.svg";
import "./index.scss";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="container">
        <div className="minTitle">
          <span className="line-block"></span>
          <p>02. BENEFITS</p>
        </div>
        <h2 className="benefits__title title">Lymcoin Benefits</h2>
        <ul className="benefits__items">
            <li className="benefits__item card">
                <span className="card__number">01.</span>
                <img className="card__img" src={Icon1} alt="card-icon"/>
                <h3 className="card__title titleh3">Lymcoin Benefits</h3>
                <p className="card__text">Use Lymcoin to make instant</p>
            </li>
            <li className="benefits__item card">
                <span className="card__number">02.</span>
                <img className="card__img" src={Icon2} alt="card-icon"/>
                <h3 className="card__title titleh3">Lymcoin Benefits</h3>
                <p className="card__text">Use Lymcoin to make instant</p>
            </li>
            <li className="benefits__item card">
                <span className="card__number">03.</span>
                <img className="card__img" src={Icon3} alt="card-icon"/>
                <h3 className="card__title titleh3">Lymcoin Benefits</h3>
                <p className="card__text">Use Lymcoin to make instant</p>
            </li>
            <li className="benefits__item card">
                <span className="card__number">04.</span>
                <img className="card__img" src={Icon4} alt="card-icon"/>
                <h3 className="card__title titleh3">Lymcoin Benefits</h3>
                <p className="card__text">Use Lymcoin to make instant</p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Benefits;
