import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useFormAndValidation from "../hooks/useFormAndValidation";

export default function AddPlacePopup(props) {
  const { values, handleChange, setValues, errors } = useFormAndValidation({
    name: "",
    link: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name: values.name,
      link: values.link,
    });
  }

  useEffect(() => {
    setValues({
      name: "",
      link: "",
    });
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Создать"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_name"
        id="card-name"
        type="text"
        placeholder="Название"
        required
        name="name"
        minLength="2"
        maxLength="30"
        onChange={handleChange}
        value={values.name}
      />
      <span className="popup__error-message card-name-error">{errors.name}</span>
      <input
        className="popup__input popup__input_type_link"
        id="card-url"
        type="url"
        placeholder="Ссылка на картинку"
        required
        name="link"
        onChange={handleChange}
        value={values.link}
      />
      <span className="popup__error-message card-url-error">{errors.link}</span>
    </PopupWithForm>
  );
}
