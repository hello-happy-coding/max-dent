import React from "react";
import "./place.css";
import Line from "../../assets/images/line.png";
import "animate.css";
import GoogleMap from "./GoogleMaps";
import Facebook from "../Place/Facebook";
import InstagramIcon from "./Instagram";

const Place = () => {
  return (
    <div>
      <h3 className="appointment">ZAPLANUJ WIZYTĘ</h3>
      <img src={Line} alt="line" className="line-third" />
      <div className="table">
        <table>
          <tr>
            <th className="th-place">Olkusz</th>
            <th className="th-place">Katowice</th>
          </tr>
          <tr>
            <td className="td-calle">ul. Nowa 13, Olkusz</td>
            <td className="td-calle">ul. Rolna 17b/1, Katowice</td>
          </tr>
          <tr>
            <td className="td-semana">Poniedziałek, Wtorek, Czwartek</td>
            <td className="td-semana">Środa, Czwartek</td>
          </tr>
          <tr>
            <td>11-18</td>
            <td>10-18</td>
          </tr>
          <tr>
            <td className="td-number">500 500 500</td>
            <td className="td-number">500 500 500</td>
          </tr>
          <tr>
            <td className="td-adress">ark.zurek@gmail.com</td>
            <td className="td-adress">dental.care@gmail.com</td>
          </tr>
        </table>
      </div>
      <div className="fb-icon">
        <Facebook />
        <InstagramIcon />
      </div>
      <div>
        <GoogleMap />
      </div>
    </div>
  );
};

export default Place;
