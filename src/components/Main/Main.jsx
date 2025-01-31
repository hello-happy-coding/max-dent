import React from "react";
import ImageOne from "./ImgComponents/First/First";
import ImageTwo from "./ImgComponents/Second/Second";
import ImageThree from "./ImgComponents/Third/Third";
import FirstVisit from "../FirstVisit/FirstVisit";
import OuersServices from "../OuersServices/OuersServices";
import Place from "../Place/Place";
import ContactForm from "../ContactForm/ContactForm";
import Cookie from "../Cookie/Cookie";

function Main() {
  return (
    <div>
      <ImageOne />
      <OuersServices />
      <ImageTwo />
      <FirstVisit />
      <ImageThree />
      <ContactForm />
      <Cookie />
      <Place />
    </div>
  );
}

export default Main;
