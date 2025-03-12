import React from "react";
import "./StickyFooter.css";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";
import Logo from "../Logo/Logo";

const currentYear = new Date().getFullYear();

const StickyFooter = () => {
  return (
    <footer className="sticky-footer">
      <div className="content-footer">
        <div className="footer-top">
          <Logo width="150px" height="auto" />
          <div className="icons">
            <a
              href="https://www.facebook.com/profile.php?id=100063535452341#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              <BiLogoFacebookSquare size="24" className="icon" />
            </a>
            <a
              href="https://www.instagram.com/ortho.of.care/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <FaInstagram size="24" className="icon" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            <BiCopyright /> {currentYear} Wszelkie prawa zastrzeżone. ‖
          </span>
          <a
            className="happy-coding"
            href="https://happy-coding.pl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>By Happy Coding</div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default StickyFooter;
