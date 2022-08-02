import baseUrl from "./utils.js"
class Auth {
  
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(password, email) {
    return fetch(`${baseUrl}/signup`, {
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
    return fetch(`${baseUrl}/signin`, {
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
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return localStorage.jwt;
        }
      })
  }

  checkToken(token) {
    return fetch(`${baseUrl}/users/me`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      .then(this._checkResponse)
  }
}

export default Auth  
