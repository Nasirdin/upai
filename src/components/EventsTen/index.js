import React from "react";
import "./index.scss";

const EventsTen = () => {
  return (
    <div className="eventsTen">
      <div className="container">
        <div className="minTitle">
          <span className="line-block"></span>
          <p>02. team</p>
        </div>
        <h2 className="eventsTen__title title">Upcoming Events</h2>
        <ul className="eventsTen__items">
          <li className="eventsTen__card card">
            <h2 className="card__num title">16</h2>
            <p className="card__month">April 2019</p>
            <h3 className="card__title titleh3">Ethyl Voting</h3>
            <p className="card__text">“The Ethyl Community Fund Proposal has started their voting.”</p>
            <a className="card__btn btn btn_white">read more</a>
          </li>
          <li className="eventsTen__card card">
            <h2 className="card__num title">30</h2>
            <p className="card__month">May 2019</p>
            <h3 className="card__title titleh3">Chainges Conference</h3>
            <p className="card__text">Join the first world-class quality blockchain and cryptocurrency conference</p>
            <a className="card__btn btn">read more</a>
          </li>
          <li className="eventsTen__card card">
            <h2 className="card__num title">10</h2>
            <p className="card__month">June 2019</p>
            <h3 className="card__title titleh3">Ethyl Voting</h3>
            <p className="card__text">Catapult Lymcoin (version 2.0) will come sometime this year</p>
            <a className="card__btn btn btn_white">read more</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EventsTen;
