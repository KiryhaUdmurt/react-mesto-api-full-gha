class Api {
  constructor(baseUrl, token) {
    this._baseUrl = baseUrl;
    this._token = token;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
      authorization: this._token,
    };
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInformation() {
    return fetch(`${this._baseUrl}/v1/cohort-61/users/me`, {
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/v1/cohort-61/cards`, {
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  changeProfileInfo(data) {
    return fetch(`${this._baseUrl}/v1/cohort-61/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._getJson);
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/v1/cohort-61/cards`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._getJson);
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/v1/cohort-61/cards/${id}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/v1/cohort-61/cards/${id}/likes`, {
      method: "PUT",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  deleteLike(id) {
    return fetch(`${this._baseUrl}/v1/cohort-61/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._getHeaders(),
    }).then(this._getJson);
  }

  changeAvatar(data) {
    return fetch(`${this._baseUrl}/v1/cohort-61/users/me/avatar`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._getJson);
  }

}

export const api = new Api(
  "https://mesto.nomoreparties.co",
  "a3c18fa0-3704-4ba8-ba34-414472677779"
);
