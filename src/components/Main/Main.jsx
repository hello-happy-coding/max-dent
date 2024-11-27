import React from "react";
import "./Main.css";
// import Offer from '../Offer/Offer';
import ImageOne from "./ImgComponents/First/First";
import ImageTwo from "./ImgComponents/Second/Second";
import ImageThree from "./ImgComponents/Third/Third";
import TextBox from "./ImgComponents/WelcomText/WelcomText";
import FirstVisit from "../FirstVisit/FirstVisit";
import OuersServices from "../OuersServices/OuersServices";

function Main() {
  return (
    <div>
      <ImageOne />
      <TextBox />
      <ImageTwo />
      <FirstVisit />
      <ImageThree />
      <OuersServices />
    </div>
  );
}

export default Main;

// const OffersArray=[{name:'Inplanty'},{name:'Endodoncja'},{name:'Protetyka'}];

// function Main() {
//     return(
//         <div>
//             {OffersArray.map((offer)=><Offer title={offer.name}/>)}
//         </div>

//     )
// }

// export default Main;
