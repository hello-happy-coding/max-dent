import React from "react";
import "./FirstVisit.css";
import Line from "../../assets/images/line.png";

const FirstVisit = () => {
  return (
    <div className="contener-first-visit">
      <h3 className="title-first-visit">PIERWSZA WIZYTA W NASZYM GABINECIE</h3>
      <img src={Line} alt="line" className="line" />
      <div className="text-first-visit-one">
        <p>
          Pierwsza wizyta to ważny krok w kierunku zdrowego uśmiechu, dlatego
          staramy się, aby każde pierwsze wrażenie było pozytywne i komfortowe.
          Indywidualne podejście do pacjenta jest dla nas priorytetem - każda
          osoba odwiedzająca nasz gabinet może liczyć na pełne zrozumienie
          swoich potrzeb oraz dokładne omówienie proponowanego planu leczenia.
        </p>
        <p>
          Stawiamy na otwartą komunikację i współpracę, aby wspólnie zadbać o
          zdrowie i estetykę Twojego uśmiechu. Naszym celem jest nie tylko
          leczenie, ale również edukacja pacjentów o znaczeniu profilaktyki i
          zdrowych nawyków.
        </p>
        <p>
          Zależy nam na tym, abyś opuszczał nasz gabinet z poczuciem pewności,
          że jesteś w dobrych rękach. Zapraszamy do umówienia się na wizytę i
          dołączenia do grona naszych zdrowych pacjentów.
        </p>
      </div>
    </div>
  );
};

export default FirstVisit;
