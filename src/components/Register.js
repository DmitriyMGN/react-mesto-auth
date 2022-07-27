import { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
<div className="login"> 
    <h2 className="login__title">Регистрация</h2>
      <form className="login__form">
        <input className="login__input" placeholder="Email"></input>  
        <input className="login__input" placeholder="Пароль"></input>
        <button className="login__button" type="submit">Зарегестрироваться</button>
      </form>  
      <NavLink className="" to="/sign-in">Уже зарегистрированы? Войти</NavLink>
</div>

  )
}

export default Register;