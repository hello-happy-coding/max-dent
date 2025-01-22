import React, { useState } from "react";
import logow from "../../assets/logo/logow.svg";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Zamknij menu po kliknięciu
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <nav className="nav">
        <img
          src={logow}
          alt="logo"
          className="white-logo animate__animated animate__fadeIn"
        />
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          ☰
        </button>
        <ul
          className={`nav-list animate__animated animate__fadeIn ${
            menuOpen ? "active" : ""
          }`}
        >
          <li>
            <a
              href="#nasza-oferta"
              className="default-link link"
              onClick={(e) => handleSmoothScroll(e, "nasza-oferta")}
            >
              <b>NASZA OFERTA</b>
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/Xx2G8JeoEFtho7Sm8"
              className="default-link link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>UL. NOWA 13, OLKUSZ</b>
            </a>
          </li>
          <li>
            <a
              href="number"
              className="number-link link"
              onClick={(e) => handleSmoothScroll(e, "umów się na wizytę")}
            >
              <b>+48 669 000 700</b>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
