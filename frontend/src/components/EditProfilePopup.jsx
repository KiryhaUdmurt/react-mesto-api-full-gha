import React, { useContext, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useFormAndValidation from "../hooks/useFormAndValidation";

export default function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, setValues, errors } = useFormAndValidation({
    name: currentUser.name,
    about: currentUser.about,
  });

  useEffect(() => {
    setValues({
      name: currentUser.name,
      about: currentUser.about,
    });
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: values.name,
      about: values.about,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText="Сохранить"
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_name"
        id="profile-name"
        type="text"
        placeholder="Имя"
        required
        name="name"
        minLength="2"
        maxLength="40"
        value={values.name || ""}
        onChange={handleChange}
      />
      <span className="popup__error-message profile-name-error">{errors.name}</span>
      <input
        className="popup__input popup__input_type_status"
        id="profile-job"
        type="text"
        placeholder="О себе"
        required
        name="about"
        minLength="2"
        maxLength="200"
        value={values.about || ""}
        onChange={handleChange}
      />
      <span className="popup__error-message profile-job-error">{errors.about}</span>
    </PopupWithForm>
  );
}
