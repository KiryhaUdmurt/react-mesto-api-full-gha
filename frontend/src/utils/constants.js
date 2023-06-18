
// объект настроек валидации
export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error-message_active'
};

// Профиль
export const popupProfileEditButton = document.querySelector(".profile__edit-button");
export const popUpProfile = document.querySelector(".popup_type_profile");
export const popupProfileName = popUpProfile.querySelector(".popup__input_type_name");
export const popupProfileStatus = popUpProfile.querySelector(".popup__input_type_status");
export const popupProfileForm = popUpProfile.querySelector(".popup__form");
export const userName = document.querySelector('.profile__name');
export const userStatus = document.querySelector('.profile__status');

export const avatar = document.querySelector('.profile-img');
export const popupAvatar = document.querySelector('.popup_type_avatar');
export const popupAvatarForm = popupAvatar.querySelector('.popup__form');
export const popupAvatarEditButton = document.querySelector(".profile__avatar-edit-btn");

// Попап добавления карточки
export const popUpAddCard = document.querySelector(".popup_type_card");
export const popupAddForm = popUpAddCard.querySelector(".popup__form");
export const popupAddCardButton = document.querySelector(".profile__add-button");

// контейнер для карточек
export const cards = document.querySelector(".elements__list");

// попап картинки
export const popUpImage = document.querySelector(".popup_type_image");
