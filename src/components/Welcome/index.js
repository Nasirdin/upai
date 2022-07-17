import React from "react";
import Img from "../../assets/img/img1.png";
import "./index.scss";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome__img">
          <img src={Img} alt="img" />
        </div>
        <div className="welcome__content">
          <div className="minTitle">
            <span className="line-block"></span>
            <p>01. welcome</p>
          </div>
          <h2 className="welcome__title title">Lymcoin is Digital Cash You Can Spend Anywhere</h2>
          <p className="welcome__text">
            Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform
            hosted by thousands of users around the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
