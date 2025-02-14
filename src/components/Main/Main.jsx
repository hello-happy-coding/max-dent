import React from 'react';
import First from './ImgComponents/First/First';
import Second from './ImgComponents/Second/Second';
import Third from './ImgComponents/Third/Third';
import FirstVisit from '../FirstVisit/FirstVisit';
import OurServices from '../OurServices/OurServices';
import Place from '../Place/Place';
import ContactForm from '../ContactForm/ContactForm';

const Main = () => {
  return (
    <div>
      <First />
      <OurServices />
      <Second />
      <FirstVisit />
      <Third />
      <ContactForm />
      <Place />
    </div>
  );
};

export default Main;
