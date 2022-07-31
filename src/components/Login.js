import api from "../utils/api.js";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    api
      .authorize(password, email)
      .then((jwt) => {
        if (jwt) {
          setEmail("");
          setPassword("");
          props.OnloggedIn();
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="login">
      <h2 className="login__title">Вход</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          className="login__input"
          type="email"
          placeholder="Email"
          value={email || ""}
          onChange={handleChangeEmail}
        ></input>
        <input
          className="login__input"
          type="password"
          placeholder="Пароль"
          value={password || ""}
          onChange={handleChangePassword}
        ></input>
        <button className="login__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
