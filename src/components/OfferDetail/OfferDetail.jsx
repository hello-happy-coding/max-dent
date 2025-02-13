import React from 'react';
import './OfferDetail.css';

const OfferDetail = ({ id, srcImg, text }) => {
  console.log(srcImg);
  return (
    <div>
      <div>{id}</div>
      {srcImg && <img src={srcImg} alt='img' className='Implant-Main' />}
      {/* jeżeli srcImg jest true to wyrenderuj obrazek */}
      <div>{text}</div>
    </div>
  );
};

export default OfferDetail;
