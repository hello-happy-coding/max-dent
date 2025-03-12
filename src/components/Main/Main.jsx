import React from "react";
import Hero from "../Hero/Hero";
import FirstVisit from "../FirstVisit/FirstVisit";
import OurServices from "../OurServices/OurServices";
import Places from "../Places/Places";
import ContactForm from "../ContactForm/ContactForm";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import parallaxImageOne from "../../assets/images/parallax/two.webp";
import parallaxImageTwo from "../../assets/images/parallax/three.webp";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <ParallaxImage image={parallaxImageOne} />
      <FirstVisit />
      <ParallaxImage image={parallaxImageTwo} />
      <ContactForm />
      <Places />
    </>
  );
};

export default Main;
