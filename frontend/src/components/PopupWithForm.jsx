import React, { useEffect } from "react";

export default function PopupWithForm(props) {
  function closeEsc(e) {
    if (e.key === "Escape") {
      props.onClose();
    }
  }

  useEffect(() => {
    if (props.isOpen) {
      console.log("mounted");
      document.addEventListener("keydown", closeEsc);
    return () => {
      console.log("unmounted");
      document.removeEventListener("keydown", closeEsc);
    };
  }
  }, [props.isOpen]);

  function closeOverlay(e) {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  }

  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
      onClick={closeOverlay}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          name={props.name}
          noValidate
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="popup__save-btn" type="submit">
            {props.buttonText}
          </button>
        </form>
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}
