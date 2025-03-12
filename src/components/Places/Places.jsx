import React from "react";
import "./Places.css";
import "animate.css";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Places = () => {
  return (
    <div className="information">
      <div className="left-section">
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
      </div>

      {/* Tabela godzin otwarcia */}
      <div className="right-section-table">
        <div className="schedule-table">
          {[
            { day: "Poniedziałek", hours: "11:00 - 18:00" },
            { day: "Wtorek", hours: "11:00 - 18:00" },
            { day: "Czwartek", hours: "11:00 - 18:00" },
          ].map((item) => (
            <div key={item.day} className="schedule-table-row">
              <span className="schedule-table-row-item">{item.day}</span>
              <span className="schedule-table-row-item">{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
