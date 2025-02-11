import React, { useState } from "react";
import logow from "../../../../assets/logo/logow.svg";
import "../First/First.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Main from "../../../../assets/images/main.jpg";

function First() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="nav-overlay">
        <nav className="nav">
          <div className="nav-container">
            <div className="nav-left">
              <a
                href="#nasza-oferta"
                className="default-link link"
                onClick={(e) => handleSmoothScroll(e, "nasza-oferta")}
              >
                <b>NASZA OFERTA</b>
              </a>
            </div>

            <img
              src={logow}
              alt="logo"
              className="white-logo center-logo animate__animated animate__fadeIn"
            />

            <div className="nav-right">
              <a
                href="https://maps.app.goo.gl/Xx2G8JeoEFtho7Sm8"
                className="default-link link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>UL. NOWA 13, OLKUSZ</b>
              </a>
              <a
                href="number"
                className="number-link link"
                onClick={(e) => handleSmoothScroll(e, "umów się na wizytę")}
              >
                <b>+48 669 000 700</b>
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Główne zdjęcie z tekstem na środku */}
      <div className="main-image-container">
        <img src={Main} alt="Main background" className="main-image" />
        <div className="main-text">Prywatna Praktyka Stomatologiczna</div>
        <div className="main-text-2">MAX DENT</div>
      </div>
    </>
  );
}

export default First;
