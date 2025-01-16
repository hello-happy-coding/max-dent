import React from "react";
import Line from "../../assets/images/line.png";
import "./ContactForm.css";
import CaffeImage from "../../assets/images/caffe.jpg";

const ContactForm = () => {
  return (
    <div>
      <div className="container-header">
        <h3 id="umów się na wizytę" className="appointment">
          MASZ PYTANIA?
          <br />
          CHCESZ UMÓWIĆ SIĘ NA WIZYTĘ?
          <br />
          ZAPRASZAMY DO KONTAKTU.
        </h3>
        <img src={Line} alt="line" className="line-third" />
      </div>

      <form
        action="https://formsubmit.co/ewelinapuz@gmail.com"
        method="POST"
        class="contact-form"
      >
        <div className="container">
          <div className="container-image">
            <img src={CaffeImage} alt="cafe" className="form-image" />
          </div>
          <div class="form-container">
            <div class="form-group">
              <label for="name">Imię i nazwisko:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Wpisz swoje imię i nazwisko"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Twój mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Wpisz swój e-mail"
                required
              />
            </div>
            <div class="form-group">
              <label for="phone">Twój numer kontaktowy:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Wpisz swój numer"
                required
              />
            </div>
            <div class="form-group">
              <label for="message">Twoja wiadomość:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Napisz swoją wiadomość"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-btn">
              Wyślij
            </button>
          </div>
        </div>
      </form>
      {/* <div className="form-image">
        <img src={CaffeImage} alt="Caffe" />
      </div> */}
    </div>
  );
};

export default ContactForm;
