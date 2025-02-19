import React from 'react';
import './TelephoneButton.css';

import { elementId } from '../../constants/elementId';

const TelephoneButton = () => {
  const scrollToSection = () => {
    const section = document.getElementById(elementId.contact);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className='telephone-button' onClick={scrollToSection}>
      Kontakt
    </button>
  );
};

export default TelephoneButton;
