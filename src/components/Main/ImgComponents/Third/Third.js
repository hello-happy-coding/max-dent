import React from "react";
import { Parallax } from 'react-parallax';
import Tools from '../../../../assets/images/three.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Tools} strength={700}>
    </Parallax>
);

export default ImageThree;