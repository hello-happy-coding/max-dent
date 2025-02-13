import React, { useState } from 'react';
import './Tile.css';

const Tile = ({ title, description, modalText, imagePath }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className='tile' onClick={handleModal}>
        <h3 className='tile-title'>{title}</h3>
        <p className='tile-description'>{description}</p>
      </div>

      {isModalOpen && (
        <div className='modal'>
          <div
            className='modal-content'
            style={{
              backgroundImage: imagePath,
              backgroundColor: 'rgba(238, 232, 232, 0.77)', // Czarny kolor z przezroczystością 50%
              backgroundBlendMode: 'overlay',
            }}
          >
            <button className='close-button' onClick={handleModal}>
              &times;
            </button>
            <h2 className='modal-heading'>{title}</h2>
            <p className='modal-text'>{modalText}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Tile;
