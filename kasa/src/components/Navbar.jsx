import { NavLink } from "react-router-dom";
import Logo from '../assets/kasa.png';

export default function Navbar() {
    return (
      <header>
        <nav className="navbar">
          <img className="navbar-logo" src={Logo} alt="logo kasa" />
          <ul className="navbar-menu">
            <li className="navbar-menu--link">
              <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "not-active")}>
                Accueil
              </NavLink>
            </li>
            <li className="navbar-menu--link">
            <NavLink to={"/about"}className={({ isActive }) => (isActive ? "active" : "not-active")}>
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
}

