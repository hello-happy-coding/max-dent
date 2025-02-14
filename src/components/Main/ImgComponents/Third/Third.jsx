import React from 'react';
import { Parallax } from 'react-parallax';
import Tools from '../../../../assets/images/three.jpg';

const Third = () => (
  <Parallax bgImage={Tools} strength={300}>
    <div style={{ height: '400px' }} />
  </Parallax>
);

export default Third;
