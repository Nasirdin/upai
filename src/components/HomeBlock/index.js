import React from "react";
import "./index.scss";

const HomeBlock = () => {
  return (
    <div className="homeBlock">
      <div className="first-container">
        <h1 className="homeBlock__title">
          Secure and Anonymous <br />
          Cryptocurrency
        </h1>
        <p className="line-block"></p>
        <p className="homeBlock__subtitle">Lymcoin is a decentralized, hybrid blockhain that is fully open-source. </p>
        <div className="homeBlock__btns">
          <a className="homeBlock__btn btn" href="#">contuct us</a>
          <a className="homeBlock__btn none btn btn_none" href="#">contuct us</a>
        </div>
      </div>
    </div>
  );
};

export default HomeBlock;
