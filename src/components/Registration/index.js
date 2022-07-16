import React from "react";
import "./index.scss";

const Registration = () => {
  return (
    <div className="registarttion">
      <form className="entrance__form">
        <label className="entrance__label entrance__label_phone">
          <input className="entrance__input" type="tel" placeholder="Введите номер" required />
        </label>
        <label className="entrance__label ">
          <input className="entrance__input" type="password" placeholder="Введите пароль" required />
        </label>
        <label className="entrance__label ">
          <input className="entrance__input" type="password" placeholder="Повторите пароль" required />
        </label>
        <input className="entrance__btn" type="submit" />
      </form>
    </div>
  );
};

export default Registration;
