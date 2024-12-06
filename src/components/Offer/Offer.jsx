import React from "react";
import "./Offer.css";

const tilesData = [
  {
    title: "IMPLANTOLOGIA",
    description: "Nowoczesne implanty zębowe.",
    icon: "fas fa-screwdriver",
    url: "/implantologia",
  },
  {
    title: "ENDODONCJA",
    description: "Zabiegi leczenia kanałowego z użyciem mikroskopu.",
    icon: "fas fa-tooth",
    url: "/endodoncja",
  },
  {
    title: "CHIRURGIA",
    description: "Profesjonalne zabiegi chirurgiczne w jamie ustnej.",
    icon: "fas fa-syringe",
    url: "/chirurgia",
  },
  {
    title: "PROTETYKA",
    description: "Precyzyjne odbudowy protetyczne.",
    icon: "fas fa-teeth",
    url: "/protetyka",
  },
  {
    title: "STOMATOLOGIA ZACHOWAWCZA",
    description: "Leczenie próchnicy zębów",
    icon: "fas fa-teeth",
    url: "/stomatologia-zachowawcza",
  },
  {
    title: "ORTODONCJA",
    description: "Perfekcyjny prosty uśmiech",
    icon: "fas fa-teeth",
    url: "/ortodoncja",
  },
  {
    title: "HIGIENIZACJA",
    description: "Zabieg profesjonalnego oczyszczania zębów",
    icon: "fas fa-teeth",
    url: "/higienizacja",
  },
  {
    title: "WYBIELANIE ZĘBÓW",
    description: "Zabieg estetyczny",
    icon: "fas fa-teeth",
    url: "/wybielanie-zebow",
  },
];

const Tile = ({ title, description, icon, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className="tile" onClick={handleClick}>
      <i className={`tile-icon ${icon}`} aria-hidden="true"></i>
      <h3 className="tile-title">{title}</h3>
      <p className="tile-description">{description}</p>
    </div>
  );
};

const TilesSection = () => (
  <div className="tiles-section">
    {tilesData.map((tile, index) => (
      <Tile
        key={index}
        title={tile.title}
        description={tile.description}
        icon={tile.icon}
        url={tile.url}
      />
    ))}
  </div>
);

export default TilesSection;
