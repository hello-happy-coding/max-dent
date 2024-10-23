import React from 'react';
import logow from '../../assets/logo/logow.svg';
import './Navbar.css'

function Navbar() {
  return (
    <header>
      <img src={logow} alt='logo' className='white-logo'/>
      <nav>
        <a href='link' >NASZA OFERTA</a>
        <a href='link' >UL. NOWA 13, OLKUSZ</a>
        <a href='link' className='number'>500 900 500</a>
      </nav>
    </header>
  );
}

export default Navbar;