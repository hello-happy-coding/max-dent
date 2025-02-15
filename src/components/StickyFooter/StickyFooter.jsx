import React from 'react';
import './StickyFooter.css';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaInstagram } from 'react-icons/fa';
import { BiCopyright } from 'react-icons/bi';
import logo from '../../assets/images/logo.svg';

const currentYear = new Date().getFullYear();

const StickyFooter = () => {
  return (
    <footer className='sticky-footer'>
      <div className='left-section-footer'>
        <img src={logo} alt='logo' className='dark-logo' />
        <div className='content-footer'>
          <div className='all-right'>
            <BiCopyright /> {currentYear} Wszelkie prawa zastrzeżone. ‖
          </div>
          <a
            href='https://happy-coding.pl'
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='happy-coding'>By Happy Coding</div>
          </a>
        </div>
      </div>
      <div className='right-section'>
        <div className='icons'>
          <a
            href='https://www.facebook.com/profile.php?id=100063535452341#'
            target='_blank'
            rel='noopener noreferrer'
          >
            <BiLogoFacebookSquare className='icon' />
          </a>
          <a
            href='https://www.instagram.com/ortho.of.care/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram className='icon' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;
