import React from "react";
import "./OuersServices.css";
import Offer from "../Offer/Offer";
import Divider from "../Divider/Divider";

const OuersService = () => {
  return (
    <div className="containerService">
      <h3 id="nasza-oferta">NASZA OFERTA</h3>
      <Divider />
      <Offer />
    </div>
  );
};

export default OuersService;
