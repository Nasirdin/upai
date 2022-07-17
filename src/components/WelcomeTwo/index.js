import React from "react";
import ImgPhone from "../../assets/img/tel-img.png";
import "./index.scss";

const WelcomTwo = () => {
  return (
    <div className="welcomeTwo">
      <div className="welcomeTwo__img">
        <img src={ImgPhone} alt="img" />
      </div>
      <div className="container">
        <div className="welcomeTwo__content">
          <div className="minTitle">
            <span className="line-block"></span>
            <p>02. Welcom</p>
          </div>
          <h2 className="welcomeTwo__title title">Lymcoin is Digital Cash You Can Spend Anywhere</h2>
          <p className="welcomeTwo__text">Use Lymcoin to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.</p>
          <a className="welcomeTwo__btn btn" href="#">contuct us</a>
        </div>
      </div>
    </div>
  );
};

export default WelcomTwo;
