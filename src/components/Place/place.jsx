import React from "react";
import "./place.css";
import Line from "../../assets/images/line.png";
import "animate.css";
import Facebook from "../Place/Facebook";
import InstagramIcon from "./Instagram";

const Place = () => {
  return (
    <div>
      <h3 className="appointment">UMÓW SIĘ NA WIZYTĘ</h3>
      <img src={Line} alt="line" className="line-third" />
      <div className="Information">
        <div className="Olkusz">
          <div className="city">OLKUSZ</div>
          <div className="streat">ul. Nowa 13, Olkusz</div>
          <div className="day">Poniedziałek, Wtorek, Czwartek</div>
          <div className="houer">11-18</div>
          <div className="tel">500 900 500</div>
          <div className="mail">ark.zurek@gmail.com</div>
        </div>
        <div className="Katowice">
          <div className="city">KATOWICE</div>
          <div className="streat">ul. Rolna 17/1, Katowice</div>
          <div className="day">Środa, Piątek</div>
          <div className="houer">10-18</div>
          <div className="tel">500 900 500</div>
          <div className="mail">dental.care@gmail.com</div>
        </div>
        <div className="fb-icon">
          <Facebook />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Place;
