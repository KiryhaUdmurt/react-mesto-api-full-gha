import React, { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__flex-container">
          <div className="profile__avatar-container">
            <button
              className="profile__avatar-edit-btn"
              onClick={props.onEditAvatar}
            ></button>
            <img
              className="profile__img"
              src={currentUser.avatar}
              alt="Аватар профиля"
            />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактирование профиля"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__status">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавление карточки"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {props.cards.map((card) => (
            <li className="elements__item card" key={card._id}>
              <Card
                card={card}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
