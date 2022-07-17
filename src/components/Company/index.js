import React from "react";
import Img1 from "../../assets/img/sponsor1.svg";
import Img2 from "../../assets/img/sponsor2.svg";
import Img3 from "../../assets/img/sponsor3.svg";
import Img4 from "../../assets/img/sponsor4.svg";
import Img5 from "../../assets/img/sponsor5.svg";
import Img6 from "../../assets/img/sponsor6.svg";
import "./index.scss";

const Company = () => {
  return (
    <div className="company">
      <div className="container">
        <ul className="company__items">
          <li className="company__item">
            <img className="company__img" src={Img1} alt="company-img" />
          </li>
          <li className="company__item">
            <img className="company__img" src={Img2} alt="company-img" />
          </li>
          <li className="company__item">
            <img className="company__img" src={Img3} alt="company-img" />
          </li>
          <li className="company__item">
            <img className="company__img" src={Img4} alt="company-img" />
          </li>
          <li className="company__item">
            <img className="company__img" src={Img5} alt="company-img" />
          </li>
          <li className="company__item">
            <img className="company__img" src={Img6} alt="company-img" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Company;
