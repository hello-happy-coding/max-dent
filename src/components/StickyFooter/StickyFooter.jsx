import React from "react";
import logod from "../../assets/logo/logod.png";
import "./StickyFooter.css";

const currentYear = new Date().getFullYear();

function StickyFooter() {
  return (
    <footer>
      <img src={logod} alt="logo" className="dark-logo" />
      <ul className="content-footer">
        <li className="all-right">
          &copy; {currentYear} Wszelkie prawa zastrzeżone.
        </li>
        <li className="happy-coding">By Happy Coding</li>
      </ul>
    </footer>
  );
}

export default StickyFooter;
