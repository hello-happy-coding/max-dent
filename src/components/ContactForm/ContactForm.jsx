import React from "react";
import Line from "../../assets/images/line.png";

const ContactForm = () => {
  return (
    <div>
      <div>
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
        action="https://formsubmit.io/send/ewelinapuz@gmail.com"
        method="POST"
        class="contact-form"
      >
        <div class="form-group">
          <label for="email">Imie i nazwisko</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Wpisz swoje imie i nazwisko"
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
      </form>
    </div>
  );
};

export default ContactForm;
