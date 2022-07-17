import React from "react";
import Img1 from "../../assets/img/shedule.svg";
import "./index.scss";

const Charts = () => {
  return (
    <div className="charts">
      <div className="container">
        <div className="minTitle">
          <span className="line-block"></span>
          <p>02. team</p>
        </div>
        <h2 className="charts__title title">Lymcoin Charts</h2>
        <ul className="charts__items">
          <li className="charts__item">
            <div className="charts__text">
              <p className="charts__profit">Current Price</p>
              <span>$541.27</span>
            </div>
            <img className="charts__img" src={Img1} />
          </li>
          <li className="charts__item">
            <div className="charts__text">
              <p className="charts__profit">Current Price</p>
              <span>$147 547 106</span>
            </div>
            <img className="charts__img" src={Img1} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Charts;
