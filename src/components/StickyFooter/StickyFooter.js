import React from 'react';
import logod from '../../assets/logo/logod.svg';
import './StickyFooter.css';

function StickyFooter() {
  return (
    <footer>
        <img src={logod} alt='logo' className='dark-logo' />
      <p>&copy; 2022 My Website. All rights reserved.</p>
    </footer>
  );
}

export default StickyFooter;