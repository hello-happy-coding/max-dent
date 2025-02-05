import React from "react";
import "./Place.css";
import "animate.css";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Place = () => {
  return (
    <div className="Information">
      <div className="left-section">
        <div className="city">OLKUSZ</div>

        <div className="contact-item">
          <FaPhone className="icon" />
          <span>669 000 700</span>
        </div>

        <div className="contact-item">
          <FaEnvelope className="icon" />
          <span>arkzurek@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <span>ul. Nowa 13, Olkusz</span>
        </div>

        {/* Tabela godzin otwarcia */}
        <table className="schedule-table">
          <tbody>
            <tr>
              <td>Poniedziałek</td>
              <td>11:00 - 18:00</td>
            </tr>
            <tr>
              <td>Wtorek</td>
              <td>11:00 - 18:00</td>
            </tr>
            <tr>
              <td>Czwartek</td>
              <td>11:00 - 18:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Place;
