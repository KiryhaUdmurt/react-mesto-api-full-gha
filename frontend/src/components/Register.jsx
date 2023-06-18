import React from "react";
import { Link } from "react-router-dom";
import useForm from "../hooks/useFormAndValidation";
import useFormAndValidation from "../hooks/useFormAndValidation";

const Register = ({ registerUser, onInfoClick }) => {
  const { values, handleChange, errors } = useFormAndValidation({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(values);
  };

  return (
    <div className="register">
      <h1 className="register__title">Регистрация</h1>
      <form className="register__form" onSubmit={handleSubmit}>
        <input
          className="register__input"
          type="email"
          placeholder="Email"
          required
          name="email"
          minLength="2"
          maxLength="40"
          value={values.email}
          onChange={handleChange}
        />
        <span className="register__error-message">{errors.email}</span>
        <input
          className="register__input"
          type="password"
          placeholder="Пароль"
          required
          name="password"
          minLength="2"
          maxLength="200"
          value={values.password}
          onChange={handleChange}
        />
        <span className="register__error-message">{errors.password}</span>
        <button
          className="register__save-btn"
          type="submit"
          onClick={onInfoClick}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className="register__signin">
        <p>Уже зарегистрированы?</p>
        <Link to="/sign-in" className="register__login-link">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default Register;
