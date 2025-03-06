import React, { useState } from 'react';

import Logo from '../Logo/Logo';

import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className='nav-overlay'>
      <nav className='nav'>
        <div className='nav-container'>
          <button className='hamburger' onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
          <div className='logo-container'>
            <Logo width='auto' height='80px' />
          </div>

          {/* Menu standardowe (ukryte powyżej 580px) */}
          <div className='nav-right'>
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
  );
};

export default Navbar;
