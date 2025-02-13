import React from 'react';
import { Parallax } from 'react-parallax';
import Tools from '../../../../assets/images/two.jpg';

const ImageTwo = () => (
  <Parallax bgImage={Tools} strength={300}>
    <div style={{ height: '400px' }} />
  </Parallax>
);

export default ImageTwo;
