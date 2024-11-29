import React from "react";
import "./place.css";
import Line from "../../assets/images/line.png";

const Place = () => {
  return (
    <div className="grid-place">
      <h3 className="appointment">UMÓW SIĘ NA WIZYTĘ</h3>
      <img src={Line} alt="line" className="line-third" />
      <ul className="grid-item">
        <li className="grid">Olkusz</li>
        <li className="grid">Poniedziałek, Wtorek</li>
        <li className="grid">Czwartek</li>
        <li className="grid">11-18</li>
        <li className="grid">500 800 500</li>
        <li className="grid">ark.zurek@gmail.com</li>
      </ul>
      <ul className="grid-item-two">
        <li className="grid">Katowice</li>
        <li className="grid">Środa, Czwartek</li>
        <li className="grid">10-18</li>
        <li className="grid"> 500 500 500</li>
        <li className="grid">dental.care@gmai.com</li>
      </ul>
    </div>
  );
};
export default Place;
