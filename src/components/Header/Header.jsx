// ROUTING
import { Link, NavLink } from "react-router-dom";

// HOOKS
import { useState, useEffect, useRef } from "react";

// IMAGES
import pakkun from "../../images/pakkun-img.png";

// UTILS
import navLinks from "../../utils/navLinks";
import "./Header.css";

function Header({
  handleSignUpClick,
  handleLogInClick,
  onSignOut,
  isLoggedIn,
}) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null); // wraps the button + dropdown

  useEffect(() => {
    if (!open) return; // no listener when closed

    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const renderLinks = () => {
    const links = navLinks.map((link) => (
      <li className="dropdown__item" key={link.path}>
        <NavLink
          to={link.path}
          className={({ isActive }) =>
            `dropdown__link ${isActive ? "dropdown__link--active" : ""}`
          }
          onClick={() => setOpen(false)}
        >
          {link.name}
        </NavLink>
      </li>
    ));

    return links;
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <img
          onClick={() => setOpen(false)}
          className="header__logo"
          src={pakkun}
          alt="Logo"
          width={40}
          height={40}
        />
      </Link>

      <div className="header__right">
        <div className="header__auth">
          {isLoggedIn ? (
            <button
              onClick={onSignOut}
              className="header__signup-btn header__btn"
            >
              Sign Out
            </button>
          ) : (
            <>
              <button
                onClick={handleSignUpClick}
                className="header__signup-btn header__btn"
              >
                Sign Up
              </button>
              <button
                onClick={handleLogInClick}
                className="header__login-btn header__btn"
              >
                Log In
              </button>
            </>
          )}
        </div>

        <div className="header__menu" ref={menuRef}>
          <button
            type="button"
            className="menuButton header__btn"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>

          {open && (
            <ul
              id="site-menu"
              className={`dropdown ${open ? "dropdown--open" : ""}`}
            >
              {renderLinks()}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
