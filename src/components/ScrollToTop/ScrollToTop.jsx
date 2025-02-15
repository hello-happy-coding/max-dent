import React from 'react';
import arrowIcon from '../../assets/images/arrow.svg';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='buttonScrollContainer'>
      <button className='scroll-to-top-button' onClick={scrollUp}>
        <img src={arrowIcon} alt='arrowIcon' />
      </button>
    </div>
  );
};
export default ScrollToTop;
