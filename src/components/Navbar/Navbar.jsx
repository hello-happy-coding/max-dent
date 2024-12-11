import React from "react";
import logow from "../../assets/logo/logow.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="nav">
        <img
          src={logow}
          alt="logo"
          className="white-logo animate__animated animate__fadeIn"
        />
        <ul className="nav-list animate__animated animate__fadeIn">
          <li>
            <a href="#nasza-oferta" className="default-link link">
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
            <a href="number" className="number-link link">
              <b>500 900 500</b>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
