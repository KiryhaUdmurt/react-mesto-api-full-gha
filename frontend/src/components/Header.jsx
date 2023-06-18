import { NavLink, useLocation } from "react-router-dom";
import pageLogo from "../images/logo.svg";

export default function Header({ isLoggedIn, onLogout, userData }) {
  const location = useLocation();
  return (
    <header className="header">
      <img className="header__logo" src={pageLogo} alt="Логотип Место" />
      {!isLoggedIn && (
        <nav className="header__nav">
          {location.pathname === "/sign-up" && (
            <NavLink className="header__navlink" to="/sign-in">
              Войти
            </NavLink>
          )}
          {location.pathname === "/sign-in" && (
            <NavLink className="header__navlink" to="/sign-up">
              Зарегистрироваться
            </NavLink>
          )}
        </nav>
      )}
      {isLoggedIn && (
        <nav className="header__nav">
          {location.pathname === "/" && (
            <>
            <p className="header__email">{userData}</p>
            <NavLink className="header__navlink" to="/sign-in" onClick={onLogout}>
              Выйти
            </NavLink>
            </>
          )}
        </nav>
      )}
    </header>
  );
}
