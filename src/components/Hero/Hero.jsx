import React from "react";
import "./Hero.css";

import heroImage from "../../assets/images/main.webp";

const Hero = () => {
  return (
    <div className="main-image-container">
      <img src={heroImage} alt="Main background" className="main-image" />
      <div className="clinic-info">
        <span className="clinic-desc">Prywatna Praktyka Stomatologiczna</span>
        <br />
        <span className="clinic-name">MAX DENT</span>
      </div>
    </div>
  );
};

export default Hero;
