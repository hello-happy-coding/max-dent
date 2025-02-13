import React from 'react';
import { useEffect, useState } from 'react';
import arrowIcon from '../../assets/images/arrow.svg';
import './ScrollToTop.css';

const ScrollToTop = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='buttonScrollContainer'>
      {backToTop && (
        <button className='button' onClick={scrollUp}>
          <img src={arrowIcon} alt='arrowIcon' />
        </button>
      )}
    </div>
  );
};
export default ScrollToTop;
