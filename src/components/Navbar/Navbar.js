import React from 'react';
import logow from '../../assets/logo/logow.svg';
import './Navbar.css'

function Navbar() {
  return (
    <header>
      
      <nav className='nav'>
      <img src={logow} alt='logo' className='white-logo'/>
      <ul>
        <li>
          <a href='offer' ><b>NASZA OFERTA</b></a>
        </li>
        <li>
          <a href='location' ><b>UL. NOWA 13, OLKUSZ</b></a>
        </li>
        <li>
          <a href='number' className='number'><b>500 900 500</b></a>
        </li>
      </ul>
      </nav>
    </header>
  );
}

export default Navbar;