import React from "react";
import "./Offer.css";

const tilesData = [
  {
    title: "IMPLANTOLOGIA",
    description: "Nowoczesne implanty zębowe.",
    url: "/implantologia",
  },
  {
    title: "ENDODONCJA",
    description: "Zabiegi leczenia kanałowego z użyciem mikroskopu.",
    url: "/endodoncja",
  },
  {
    title: "CHIRURGIA",
    description: "Profesjonalne zabiegi chirurgiczne w jamie ustnej.",
    url: "/chirurgia",
  },
  {
    title: "PROTETYKA",
    description: "Precyzyjne odbudowy protetyczne.",
    url: "/protetyka",
  },
  {
    title: "STOMATOLOGIA ZACHOWAWCZA",
    description: "Leczenie próchnicy zębów",
    url: "/stomatologia-zachowawcza",
  },
  {
    title: "ORTODONCJA",
    description: "Perfekcyjny prosty uśmiech",
    url: "/ortodoncja",
  },
  {
    title: "DIAGNOSTYKA",
    description: "Punktowe zdjęcie RTG",
    url: "/diagnostyka",
  },
  {
    title: "WYBIELANIE ZĘBÓW",
    description: "Zabieg estetyczny",
    url: "/wybielanie-zebow",
  },
];

const Tile = ({ title, description, icon, url }) => {
  // const handleClick = () => {
  window.open(url, "_blank");
  // };
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="tile">
      <i className={`tile-icon ${icon}`} aria-hidden="true"></i>
      <h3 className="tile-title">{title}</h3>
      <p className="tile-description">{description}</p>
    </a>
  );
};
// return (
//   <div className="tile" onClick={handleClick}>
//     <i className={`tile-icon ${icon}`} aria-hidden="true"></i>
//     <h3 className="tile-title">{title}</h3>
//     <p className="tile-description">{description}</p>
//   </div>
// );

const TilesSection = () => (
  <div className="tiles-section">
    {tilesData.map((tile, index) => (
      <Tile
        key={index}
        title={tile.title}
        description={tile.description}
        url={tile.url}
      />
    ))}
  </div>
);

export default TilesSection;