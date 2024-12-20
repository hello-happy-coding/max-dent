import React from "react";
import "./Offer.css";
import Tile from "../Tile/Tile";
import "./../../assets/images/kaseta.jpg";

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

  {
    title: "HIGIENIZACJA",
    description: "Gabinetowe oczyszczanie zębów z osadu i kamienia",
    url: "/higienizacja",
  },
];

const Offer = () => (
  <div className="tiles-section">
    {tilesData.map((tile, index) => (
      <Tile
        key={index}
        title={tile.title}
        description={tile.description}
        modalText={tile.modalText}
        // modalImage={require(`{./../../assets/images/kaseta.jpg}${tile.modalImage}`)}
      />
    ))}
  </div>
);

export default Offer;
