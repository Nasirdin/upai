import React from "react";
import "./index.scss";

const Login = () => {
  return (
    <div className="login">
      <form className="entrance__form">
        <label className="entrance__label entrance__label_phone">
          <input className="entrance__input" type="tel" placeholder="Введите номер" required />
        </label>
        <label className="entrance__label ">
          <input className="entrance__input" type="password" placeholder="Введите пароль" required />
        </label>
        <input className="entrance__btn" type="submit" />
      </form>
      <a href="#" className="login__link">Не можете войти?</a>
    </div>
  );
};

export default Login;
