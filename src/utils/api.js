class Api {
  constructor(url) {
    this._url = url;
    this._headers = {
      authorization: "7c1a9600-08e1-4003-976b-876c2ce6c6a4",
      "Content-Type": "application/json",
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  setUserInfo(item) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        about: item.about,
      }),
    }).then(this._checkResponse);
  }

  setNewCard(item) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: item.name,
        link: item.link,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, like) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: like ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateAvatar(item) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: item.avatar,
      }),
    }).then(this._checkResponse);
  }

  register(password, email) {
    return fetch("https://auth.nomoreparties.co/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          email,
        }),
      })
      .then(this._checkResponse)
  }

  authorize(password, email) {
    return fetch("https://auth.nomoreparties.co/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          email,
        }),
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return localStorage.jwt;
        }
      })
      .catch((err) => console.log(err));
  }

  checkToken(token) {
    return fetch("https://auth.nomoreparties.co/users/me", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(this._checkResponse)
  }
}

export default new Api("https://nomoreparties.co/v1/cohort-43");
