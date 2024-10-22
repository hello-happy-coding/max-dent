import React from 'react';
import logow from '../../assets/logo/logow.svg';
import './Navbar.css'

function Navbar() {
  return (
    <header>
        <img src={logow} alt='logo' className='white-logo'/>
      <div>NASZE USŁUGI</div>
    </header>
  );
}

export default Navbar;