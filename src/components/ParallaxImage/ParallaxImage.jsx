import React from 'react';
import { Parallax } from 'react-parallax';
import './ParallaxImage.css';

const ParallaxImage = ({ image }) => (
  <Parallax bgImage={image} strength={300}>
    <div className='parallax-content' />
  </Parallax>
);

export default ParallaxImage;
