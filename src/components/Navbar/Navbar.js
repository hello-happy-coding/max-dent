import React from 'react';
import logow from '../../assets/logo/logow.svg';
import './Navbar.css'

function Navbar() {
  return (
    <header>
      
      <nav>
      <img src={logow} alt='logo' className='white-logo'/>
        <a href='link' ><b>NASZA OFERTA</b></a>
        <a href='link' ><b>UL. NOWA 13, OLKUSZ</b></a>
        <a href='link' className='number'><b>500 900 500</b></a>
      </nav>
    </header>
  );
}

export default Navbar;