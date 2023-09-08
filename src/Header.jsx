import React, { useState } from "react";
import "./Header.scss";
import logo from "./assets/images/logo-bookmark.svg";

const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("header__toggle");
  const [mobileMenu, setMobileMenu] = useState("header__navigation");

  function toggleMenu() {
    if (toggleBtn === "header__toggle") {
      setToggleBtn("header__toggle open");
      setMobileMenu("header__navigation show");
    } else {
      setToggleBtn("header__toggle");
      setMobileMenu("header__navigation");
    }
  }
  return (
    <header className="header">
      <div className="wrapper">
        <object
          data={logo}
          className="header__logo"
          alt="Logo Bookmark"
          type="image/svg+xml"
        ></object>

        <nav className={mobileMenu}>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <button className="header__login">Login</button>
            </li>
          </ul>
        </nav>

        <button onClick={toggleMenu} className={toggleBtn}>
          <span className="header__top"></span>
          <span className="header__middle"></span>
          <span className="header__bottom"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
