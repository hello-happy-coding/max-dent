import React from "react";
import "./FirstVisit.css";
import Divider from "../Divider/Divider";

const FirstVisit = () => {
  return (
    <div className="contener-first-visit">
      <h3 className="title-first-visit">PIERWSZA WIZYTA W NASZYM GABINECIE</h3>
      <Divider />
      <div>
        <p className="text-first-visit-one">
          Pierwsza wizyta to ważny krok w kierunku zdrowego uśmiechu, dlatego
          staramy się, aby każde pierwsze wrażenie było pozytywne i komfortowe.
          Indywidualne podejście do pacjenta jest dla nas priorytetem - każda
          osoba odwiedzająca nasz gabinet może liczyć na pełne zrozumienie
          swoich potrzeb oraz dokładne omówienie proponowanego planu leczenia.
          Stawiamy na otwartą komunikację i współpracę, aby wspólnie zadbać o
          zdrowie i estetykę Twojego uśmiechu. Naszym celem jest nie tylko
          leczenie, ale również edukacja pacjentów o znaczeniu profilaktyki i
          zdrowych nawyków. Zależy nam na tym, abyś opuszczał nasz gabinet z
          poczuciem pewności, że jesteś w dobrych rękach. Zapraszamy do
          umówienia się na wizytę i dołączenia do grona naszych zdrowych
          pacjentów.
        </p>
      </div>
    </div>
  );
};

export default FirstVisit;
