import mestoLogo from '../images/header__logo.svg'

function Header () {
  return (
  <header className="header">
    <img src={mestoLogo} alt="Картинка логотипа Место" className="header__logo" />
  </header>
  )
}

export default Header;