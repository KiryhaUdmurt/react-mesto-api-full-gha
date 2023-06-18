import React from "react";
import successPin from "../images/success-logo.svg";
import errorPin from "../images/errror-logo.svg";

const InfoTooltip = ({ isRegistered, isOpen, onClose }) => {
  function closeEsc(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  function closeOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className={`popup popup_type_info ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <img
          className="popup__info-img"
          src={isRegistered ? successPin : errorPin}
          alt="Успешно"
        />
        <p className="popup__text">
          {isRegistered
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </p>
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
};

export default InfoTooltip;
