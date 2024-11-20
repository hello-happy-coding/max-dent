import React from 'react';
import './Offer.css';

function Offer(props) {
    console.log(props)
  return (
    <div>
        {props.title}
    </div>
  );
}

export default Offer;