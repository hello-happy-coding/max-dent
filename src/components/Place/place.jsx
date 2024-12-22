import React from "react";
import "./Place.css";
import Line from "../../assets/images/line.png";
import "animate.css";
import Facebook from "./Facebook";
import InstagramIcon from "./Instagram";

const Place = () => {
  return (
    <div>
      <h3 id="umów się na wizytę" className="appointment">
        MASZ PYTANIA?
        <br />
        CHCESZ UMÓWIĆ SIĘ NA WIZYTĘ?
        <br />
        ZAPRASZAMY DO KONTAKTU.
      </h3>
      <img src={Line} alt="line" className="line-third" />
      <div className="Information">
        <div className="Olkusz">
          <div className="city">OLKUSZ</div>
          <div className="streat">ul. Nowa 13, Olkusz</div>
          <div>Poniedziałek, Wtorek, Czwartek</div>
          <div className="houer">11-18</div>
          <div>500 900 500</div>
          <div>ark.zurek@gmail.com</div>
        </div>
        <div className="Katowice">
          <div className="city">KATOWICE</div>
          <div className="streat">ul. Rolna 17/1, Katowice</div>
          <div>Środa, Piątek</div>
          <div className="houer">10-18</div>
          <div>500 900 500</div>
          <div>dental.care@gmail.com</div>
        </div>
        <div className="fb-icon">
          <div className="socialText">ZNAJDZIESZ NAS NA:</div>
          <Facebook />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};

export default Place;
