import React from 'react';
import './Offer.css';

const OffersArray=[{name:'IMPLANTY'},{name:'CHIRURGIA'},{name:'PROTETYKA'},{name:'ORTODONCJA'},{name:'ENDODONCJA'},{name:'STOMATOLOGIA ZACHOWAWCZA'}];

function Main() {
     return(
         <div>
             {OffersArray.map((offer)=><Offer title={offer.name}/>)}
         </div>

     );
 };

 export {Main};


function Offer(props) {
    console.log(props)
  return (
    <div>
        {props.title}
    </div>
  );
}

export default Offer;