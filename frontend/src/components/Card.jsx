import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some(id => id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && "card__like-button_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <>
      <img
        src={card.link}
        alt={card.name}
        className="card__img"
        onClick={handleClick}
      />
      {isOwn && (
        <button
          className="card__delete-btn"
          type="button"
          aria-label="Удаление карточки"
          onClick={handleDeleteClick}
        />
      )}
      <div className="card__img-bar">
        <h2 className="card__name">{card.name}</h2>
        <button
          className={cardLikeButtonClassName}
          type="button"
          aria-label="Нравится"
          onClick={handleLikeClick}
        />
        <span className="card__like-number">{card.likes.length}</span>
      </div>
    </>
  );
}
