import React, { useEffect } from "react";

export default function ImagePopup({ card, onClose, isOpen }) {
  function closeOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  function closeEsc(e) {
    if (e.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    if (isOpen) {
      console.log("mounted");
      document.addEventListener("keydown", closeEsc);
    return () => {
      console.log("unmounted");
      document.removeEventListener("keydown", closeEsc);
    };
  }
  }, [isOpen]);

  return (
    <div
      className={`popup popup_type_image ${card ? "popup_opened" : ""}`}
      onClick={closeOverlay}
    >
      <figure className="popup__image-container">
        <img
          src={card ? card.link : null}
          alt={card ? card.name : null}
          className="popup__image"
        />
        <figcaption className="popup__figcaption">
          {card ? card.name : null}
        </figcaption>
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
      </figure>
    </div>
  );
}
