import React from 'react';
import './Logo.css';

import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';

const Logo = ({ color = '#fff', width, height }) => (
  <div style={{ color, width, height }}>
    <LogoIcon className='logo' />
  </div>
);

export default Logo;
