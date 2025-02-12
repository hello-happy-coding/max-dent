import React from "react";
import { Parallax } from "react-parallax";
import Tools from "../../../../assets/images/three.jpg";

const ImageThree = () => (
  <Parallax bgImage={Tools} strength={300}>
    <div style={{ height: "400px" }} />
  </Parallax>
);

export default ImageThree;
