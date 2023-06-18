import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function DeleteCardPopup(props) {
  return (
    <PopupWithForm
      name="delete"
      title="Вы уверены?"
      // isOpen={isDeletePopupOpen}
      onClose={props.onClose}
      buttonText="Да"
    />
  );
}
