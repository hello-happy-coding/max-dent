import React from 'react';
import './Offer.css';

const tilesData = [
  { title: 'IMPLANTOLOGIA', description: 'Nowoczesne implanty zębowe.', icon: 'fas fa-screwdriver' },
  { title: 'ENDODONCJA', description: 'Zabiegi leczenia kanałowego z użyciem mikroskopu.', icon: 'fas fa-tooth' },
  { title: 'CHIRURGIA', description: 'Profesjonalne zabiegi chirurgiczne w jamie ustnej.', icon: 'fas fa-syringe' },
  { title: 'PROTETYKA', description: 'Precyzyjne odbudowy protetyczne.', icon: 'fas fa-teeth' },
  { title: 'STOMATOLOGIA ZACHOWAWCZA', description: 'Leczenie próchnicy zębów', icon: 'fas fa-teeth' },
  { title: 'ORTODONCJA', description: 'Perfekcyjny prosty uśmiech', icon: 'fas fa-teeth' },
  { title: 'HIGIENIZACJA', description: 'Zabieg profesjonalnego oczyszczania zębów', icon: 'fas fa-teeth' },
  { title: 'WYBIELANIE ZĘBÓW', description: 'Zabieg estetyczny', icon: 'fas fa-teeth' },
];

const Tile = ({ title, description, icon }) => (
  <div className="tile">
    <i className={`tile-icon ${icon}`} aria-hidden="true"></i>
    <h3 className="tile-title">{title}</h3>
    <p className="tile-description">{description}</p>
  </div>
);

const TilesSection = () => (
  <div className="tiles-section">
    {tilesData.map((tile, index) => (
      <Tile key={index} title={tile.title} description={tile.description} icon={tile.icon} />
    ))}
  </div>
);

export default TilesSection;






// const OffersArray=[{name:'IMPLANTY'},{name:'CHIRURGIA'},{name:'PROTETYKA'},{name:'ORTODONCJA'},{name:'ENDODONCJA'},{name:'STOMATOLOGIA ZACHOWAWCZA'}];

// function Main() {
//      return(
//          <div>
//              {OffersArray.map((offer)=><Offer title={offer.name}/>)}
//          </div>

//      );
//  };

//  export {Main};


// function Offer(props) {
//     console.log(props)
//   return (
//     <div>
//         {props.title}
//     </div>
//   );
// }

// export default Offer;