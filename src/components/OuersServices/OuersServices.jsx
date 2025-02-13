import React from 'react';
import './OuersServices.css';
import Offer from '../Offer/Offer';
import Divider from '../Divider/Divider';

const OuersService = () => {
  return (
    <div id='nasza-oferta' className='containerService'>
      <h3>NASZA OFERTA</h3>
      <Divider />
      <Offer />
    </div>
  );
};

export default OuersService;
