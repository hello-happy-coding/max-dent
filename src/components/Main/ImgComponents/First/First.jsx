import React, { useState } from 'react';
import logow from '../../../../assets/logo/logow.svg';
import './First.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Tools from '../../../../assets/images/main.jpg';

const First = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className='nav-overlay'>
        <nav className='nav'>
          <div className='nav-container'>
            <button className='hamburger' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>

            <img
              src={logow}
              alt='logo'
              className='white-logo center-logo animate__animated animate__fadeIn'
            />

            {/* Menu standardowe (ukryte powyżej 580px) */}
            <div className='nav-left'>
              <a href='#nasza-oferta'>
                <b>NASZA OFERTA</b>
              </a>
            </div>

            <div className='nav-right'>
              <a
                href='https://maps.app.goo.gl/Xx2G8JeoEFtho7Sm8'
                target='_blank'
                rel='noopener noreferrer'
              >
                <b>UL. NOWA 13, OLKUSZ</b>
              </a>
              <a href='tel:+48669000700'>
                <b>+48 669 000 700</b>
              </a>
            </div>
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
              <a href='#nasza-oferta'>
                <b>NASZA OFERTA</b>
              </a>
              <a
                href='https://maps.app.goo.gl/Xx2G8JeoEFtho7Sm8'
                target='_blank'
                rel='noopener noreferrer'
              >
                <b>UL. NOWA 13, OLKUSZ</b>
              </a>
              <a href='tel:+48669000700'>
                <b>+48 669 000 700</b>
              </a>
            </div>
          </div>
        </nav>
      </header>

      <div className='main-image-container'>
        <img src={Tools} alt='Main background' className='main-image' />
        <div className='clinic-info'>
          <span className='clinic-desc'>Prywatna Praktyka Stomatologiczna</span>
          <br />
          <span className='clinic-name'>MAX DENT</span>
        </div>
      </div>
    </>
  );
};

export default First;
