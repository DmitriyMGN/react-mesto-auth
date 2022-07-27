import mestoLogo from '../images/header__logo.svg';
import { NavLink } from 'react-router-dom';

function Header (props) {
  return (
  <header className="header">
    <img src={mestoLogo} alt="Картинка логотипа Место" className="header__logo" />
    <div className="navbar">
      {props.loggedIn && <NavLink exact className="" to="/sign-up">Регистрация</NavLink> }
    </div>
  </header>
  )
}

export default Header;