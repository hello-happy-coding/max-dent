import React from "react";
import { Parallax } from "react-parallax";
import Tools from "../../../../assets/images/one.jpg";

const ImageOne = () => (
  <Parallax
    className="image animate__animated animate__fadeIn"
    bgImage={Tools}
    strength={300}
  >
    <div className="content">
      <span className="img-text animate__animated animate__fadeIn">
        WITAJ W <b>MAX DENT</b> PRYWATNEJ PRAKTYCE
        <br />
        STOMATOLOGICZNEJ
      </span>
    </div>
  </Parallax>
);

export default ImageOne;
