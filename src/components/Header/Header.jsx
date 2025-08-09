import { Link, NavLink } from "react-router-dom";
import pakkun from "../../images/pakkun-img.png";

import navLinks from "../../utils/navLinks";
import "./Header.css";

function Header() {
  function navBarLinks() {
    const links = navLinks.map((link) => (
      <li className="navBar__list" key={link.path}>
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            `navBar__link ${isActive ? "navBar__active-link" : ""}`
          }
        >
          {link.name}
        </NavLink>
      </li>
    ));

    return links;
  }

  return (
    <header className="header">
      <Link to={"/"}>
        <img
          className="navBar__logo"
          src={pakkun}
          alt="Logo"
          width={40}
          height={40}
        />
      </Link>
      <nav className="navBar">
        <ul className="navBar__list-container">{navBarLinks()}</ul>
      </nav>
    </header>
  );
}

export default Header;
