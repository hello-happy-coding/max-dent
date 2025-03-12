import React from "react";
import { HiChevronDoubleUp } from "react-icons/hi";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="buttonScrollContainer">
      <button
        aria-label="idż do góry strony"
        className="scroll-to-top-button"
        onClick={scrollUp}
      >
        <HiChevronDoubleUp size={24} />
      </button>
    </div>
  );
};
export default ScrollToTop;
