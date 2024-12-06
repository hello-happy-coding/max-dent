import React, { useState } from "react";
import IG from "../../assets/images/ig.png";

const InstagramIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open("https://www.instagram.com/ortho.of.care/", "_blanc");
  };
  return (
    <img
      src={IG}
      alt="klik"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "pointer",
        width: "30px",
        height: "30px",
        backgroundColor: isHovered ? "orange" : "lightgray",
        transistion: "background-color 0.4s ease",
        borderRadius: "5px",
        marginLeft: "20px",
      }}
    />
  );
};

export default InstagramIcon;
