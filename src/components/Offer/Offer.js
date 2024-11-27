import React from 'react';
import './Offer.css';

const OffersArray=[{name:'Inplanty'},{name:'Endodoncja'},{name:'Protetyka'}];

function Main() {
     return(
         <div>
             {OffersArray.map((offer)=><Offer title={offer.name}/>)}
         </div>

     )
 }

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