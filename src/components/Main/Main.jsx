import React from 'react';
import ImageOne from './ImgComponents/First/First';
import ImageTwo from '../../components/Main/ImgComponents/Second/Second';
import ImageThree from './ImgComponents/Third/Third';
import FirstVisit from '../FirstVisit/FirstVisit';
import OuersServices from '../OuersServices/OuersServices';
import Place from '../Place/Place';
import ContactForm from '../ContactForm/ContactForm';

function Main() {
  return (
    <div>
      <ImageOne />
      <OuersServices />
      <ImageTwo />
      <FirstVisit />
      <ImageThree />
      <ContactForm />
      <Place />
    </div>
  );
}

export default Main;
