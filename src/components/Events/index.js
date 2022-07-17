import React from "react";
import "./index.scss";

const Events = () => {
  return (
    <div className="events">
      <div className="container">
        <ul className="events__items events__items_one">
          <li className="events__item event">
            <span className="event__time">November 2017</span>
          </li>
          <li></li>
          <li className="events__item event">
            <h4 className="event__title titleh4">Tracking services for different smart contract types</h4>
            <span className="event__time">March 2018</span>
          </li>
          <li></li>
          <li className="events__item event">
            <h4 className="event__title titleh4">Release of a decentralized app for affiliate networks</h4>
            <span className="event__time">May 2020</span>
          </li>
          <li></li>
        </ul>
        <ul className="events__line">
          <li className="events__dot active"><span></span></li>
          <li className="events__dot active"><span></span></li>
          <li className="events__dot active"><span></span></li>
          <li className="events__dot active"><span></span></li>
          <li className="events__dot"><span></span></li>
          <li className="events__dot"><span></span></li>
        </ul>
        <ul className="events__items">
          <li></li>
          <li className="events__item event">
            <h4 className="event__title titleh4">
              Development of different types of smart contracts (CPA, CPL, CPC, CPS, CPI)
            </h4>
            <span className="event__time">January 2018</span>
          </li>
          <li></li>
          <li className="events__item event">
            <h4 className="event__title titleh4">Release of a decentralized app for merchants / affiliates</h4>
            <span className="event__time">March 2019</span>
          </li>
          <li></li>
          <li className="events__item event">
            <h4 className="event__title titleh4">Launch of the world's first decentralized affiliate network based on the HOQU platform</h4>
            <span className="event__time">September 2020</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Events;
