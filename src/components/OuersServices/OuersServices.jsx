import React from "react";
import "./OuersServices.css";
import Break from "../../assets/images/line.png";
import Offer from "../Offer/Offer";

const OuersService = () => {
  return (
    <div className="containerService">
      <h3 id="nasza-oferta" className="ouersService">
        NASZA OFERTA
      </h3>
      <img src={Break} alt="line" className="line" />
      <Offer />
    </div>
  );
};

export default OuersService;
