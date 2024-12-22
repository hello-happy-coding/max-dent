import React, { useState } from "react";
import "./Tile.css";

const Tile = ({ title, description, modalText, modalImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="tile" onClick={handleModal}>
        <h3 className="tile-title">{title}</h3>
        <p className="tile-description">{description}</p>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleModal}>
              &times;
            </button>
            <h2>{title}</h2>
            <p className="modal-text">{modalText}</p>
            {modalImage && (
              <img src={modalImage} alt={title} className="modal-image" />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Tile;

// import React from "react";
// import "./Tile.css";
// import { Link } from "react-router-dom";

// const Tile = ({ title, description, url }) => {
//   return (
//     <Link target="_blank" rel="noopener noreferrer" className="tile">
//       <h3 className="tile-title">{title}</h3>
//       <p className="tile-description">{description}</p>
//     </Link>
//   );
// };

// export default Tile;
