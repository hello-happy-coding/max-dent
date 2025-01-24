import React from "react";
import { Parallax } from "react-parallax";
import Mobilka from "../../../../assets/images/mobilka.jpg";
import "../First/First.css";

const ImageOne = () => (
  <Parallax
    className="image animate__animated animate__fadeIn"
    bgImage={Mobilka}
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
