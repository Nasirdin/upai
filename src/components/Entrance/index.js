import React, { useState } from "react";
import Login from "../Login";
import Registration from "../Registration";
import Logotype from "../../assets/images/logo.svg";
import GoogleIcon from "../../assets/images/google-icon.svg";
import FacebookIcon from "../../assets/images/facebook-icon.svg";
import "./index.scss";

const Entrance = () => {
  const [registartion, setRegistration] = useState(true);

  const btnentrance = (e) => {
    console.log('ok');
    e.preventDefault();
    setRegistration(!registartion);
  };

  return (
    <div className="entrance">
      <div className="container">
        <div className="entrance__img">
          <img src={Logotype} alt="logotype-icon" />
        </div>
        <p className="entrance__text">Войти через социальные сети</p>
        <ul className="entrance__socials socials">
            <li><button className="socials__btn"><img src={GoogleIcon} alt="google-icon"/></button></li>
            <li><button className="socials__btn"><img src={FacebookIcon} alt="facebook-icon"/></button></li>
        </ul>
        {!registartion ? <Login /> : <Registration />}
        <button className="entrance__switch" onClick={btnentrance}>{!registartion ? 'Зарегистрироваться' : 'Войти'}</button>
      </div>
    </div>
  );
};

export default Entrance;
