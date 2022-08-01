class Auth {
  
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
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

export default Auth  
