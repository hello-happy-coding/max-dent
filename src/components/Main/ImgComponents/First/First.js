import React from "react";
import { Parallax } from 'react-parallax';
import Tools from '../../../../assets/images/one.jpg';

const ImageOne = () => (
    <Parallax className='image' bgImage={Tools} strength={200}>
        <div className='content'>
            <span className='img-text'>WITAJ W MAX DENT PRYWATNEJ PRAKTYCE STOMATOLOGICZNEJ</span>
        </div>
    </Parallax>
);

export default ImageOne;