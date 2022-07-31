import api from '../utils/api.js'
import { useState } from "react";
import { NavLink } from 'react-router-dom';

function Register(props) {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // function handleChangeEmail(e) {
  //   setEmail(e.target.value);
  // }

  // function handleChangePassword(e) {
  //   setPassword(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setEmail("");
  //   setPassword("");
  //   api.register(password, email)
  //     .then(() => {
  //     })
  //     .catch(() => {
        
  //     })
  // }


  return (
<div className="login"> 
    <h2 className="login__title">Регистрация</h2>
      <form className="login__form" onSubmit={props.onRegister}>
        <input className="login__input" type="email" placeholder="Email" value={props.email || ""} onChange={props.handleChangeEmail} ></input>  
        <input className="login__input" type="password" placeholder="Пароль" value={props.password || ""} onChange={props.handleChangePassword}></input>
        <button className="login__button" type="submit">Зарегестрироваться</button>
      </form>  
      <NavLink className="navbar__element navbar__element_type_register" to="/sign-in">Уже зарегистрированы? Войти</NavLink>
</div>

  )
}

export default Register;