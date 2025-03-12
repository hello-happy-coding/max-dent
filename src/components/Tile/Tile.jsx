import React, { useState } from "react";
import "./Tile.css";
import { RiCloseFill } from "react-icons/ri";

const Tile = ({ title, description, modalText, imagePath }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="tile" onClick={handleModal}>
        <h3 className="tile-title">{title}</h3>
        <p className="tile-description">{description}</p>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div
            className="tile-modal-content"
            style={{
              backgroundImage: imagePath,
            }}
          >
            <button
              aria-label="Zamknij okno"
              className="close-button"
              onClick={handleModal}
            >
              <RiCloseFill />
            </button>
            <h2 className="modal-heading">{title}</h2>
            <p className="modal-text">{modalText}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Tile;
