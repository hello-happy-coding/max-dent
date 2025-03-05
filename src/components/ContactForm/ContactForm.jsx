import React from "react";
import Divider from "../Divider/Divider";
import "./ContactForm.css";
import caffeImage from "../../assets/images/caffe.webp";
import { elementId } from "../../constants/elementId";

const ContactForm = () => {
  return (
    <div className="contact">
      <h3 id={elementId.contact} className="invite">
        ZAPRASZAMY DO KONTAKTU
      </h3>
      <Divider />
      <form action="https://formsubmit.co/arkzurek@gmail.com" method="POST">
        <div className="container">
          <div className="container-image">
            <img src={caffeImage} alt="cafe" className="form-image" />
          </div>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="name">Imię i nazwisko:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Wpisz swoje imię i nazwisko"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Twój mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Wpisz swój e-mail"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Twój numer kontaktowy:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Wpisz swój numer"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Twoja wiadomość:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Napisz swoją wiadomość"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Wyślij
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
