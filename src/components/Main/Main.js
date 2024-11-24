import React from "react";
import './Main.css';
// import Offer from '../Offer/Offer';
import ImageOne from '../../components/Main/ImgComponents/First/First';
import ImageTwo from "./ImgComponents/Second/Second";
import ImageThree from "./ImgComponents/Third/Third";
import TextBox from "./ImgComponents/WelcomText/WelcomText";

function App() {
    return(
        <div>
            <ImageOne />
            <TextBox />
            <ImageTwo />
            <TextBox />
            <ImageThree />
        </div>
    )
}

export default App;














// const OffersArray=[{name:'Inplanty'},{name:'Endodoncja'},{name:'Protetyka'}];


// function Main() {
//     return(
//         <div>
//             {OffersArray.map((offer)=><Offer title={offer.name}/>)}
//         </div>
        
//     )
// }

// export default Main;