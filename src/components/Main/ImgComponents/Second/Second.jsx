import React from "react";
import { Parallax } from "react-parallax";
import Tools from "../../../../assets/images/two.jpg";

const ImageTwo = () => (
  <Parallax className="image" bgImage={Tools} strength={200}></Parallax>
);

export default ImageTwo;
