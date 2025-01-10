import React from "react";
import "./Main.css";
import ImageOne from "./ImgComponents/First/First";
import ImageTwo from "./ImgComponents/Second/Second";
import ImageThree from "./ImgComponents/Third/Third";
import FirstVisit from "../FirstVisit/FirstVisit";
import OuersServices from "../OuersServices/OuersServices";
import Place from "../Place/Place";
import ContactForm from "../ContactForm/ContactForm";

function Main() {
  return (
    <div>
      <ImageOne />
      <FirstVisit />
      <ImageTwo />
      <OuersServices />
      <ImageThree />
      <ContactForm />
      <Place />
    </div>
  );
}

export default Main;
