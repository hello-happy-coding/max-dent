import React from "react";
import "./Main.css";
import ImageOne from "./ImgComponents/First/First";
import ImageTwo from "./ImgComponents/Second/Second";
import ImageThree from "./ImgComponents/Third/Third";
import FirstVisit from "../FirstVisit/FirstVisit";
import OuersServices from "../OuersServices/OuersServices";
import Place from "../Place/place";

function Main() {
  return (
    <div>
      <ImageOne />
      <FirstVisit />
      <ImageTwo />
      <OuersServices />
      <ImageThree />
      <Place />
    </div>
  );
}

export default Main;
