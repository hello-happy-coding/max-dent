import React, { useState } from 'react';
import FB from '../../assets/images/facebook.png';

const FacebookIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(
      'https://www.facebook.com/p/Praktyka-Stomatologiczna-Arkadiusz-%C5%BBurek-100063535452341/?locale=nl_NL&_rdr',
      '_blanc'
    );
  };
  return (
    <img
      src={FB}
      alt='klik'
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        backgroundColor: isHovered ? 'orange' : 'lightgray',
        transistion: 'background-color 0.4s ease',
        borderRadius: '2px',
      }}
    />
  );
};

export default FacebookIcon;
