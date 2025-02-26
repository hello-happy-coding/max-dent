import React from "react";
import "./Offer.css";
import Tile from "../Tile/Tile";

const tilesData = [
  {
    title: "IMPLANTOLOGIA",
    description: "Nowoczesne implanty zębowe.",
    modalText:
      "Implantologia to skuteczny sposób na przywrócenie pełnego uśmiechu i komfortu życia. Korzystamy z nowoczesnego systemu Tommen, który gwarantuje trwałość i precyzję. Sam zabieg wszczepienia implantu, przeprowadzany w znieczuleniu miejscowym, trwa kilkadziesiąt minut i jest bezpieczny. Po okresie gojenia następuje odbudowa protetyczna - mocujemy koronę, most lub protezę, zapewniając naturalny wygląd i funkcjonalność. Implanty nie tylko poprawiają estetykę, ale również hamują zanik kości w miejscu brakującego zęba, co wspiera zdrowie jamy ustnej i strukturę twarzy. Postaw na trwałe rozwiązanie, które przywróci Ci radość z jedzenia, mówienia i uśmiechania się. Umów się na konsultację i przekonaj się, jak możemy pomóc Ci odzyskać Twój naturalny uśmiech!",
    backgroundImagePath: `url(${require("./../../assets/images/offer/szczotka.webp")})`,
  },
  {
    title: "ENDODONCJA",
    description: "Zabiegi leczenia kanałowego z użyciem mikroskopu.",
    modalText:
      "Endodoncja to leczenie kanałowe, które ratuje zęby przed usunięciem. Polega na oczyszczeniu zainfekowanej miazgi i wypełnieniu kanałów, co zapobiega dalszym infekcjom. Zabieg z wykorzystaniem mikroskopu jest precyzyjny i bezbolesny, dzięki znieczuleniu miejscowemu. Leczenie eliminuje ból, zachowując naturalny ząb i unikając konieczności stosowania protez czy implantów. Jeśli odczuwasz ból lub obrzęk, zgłoś się na konsultację - zadbamy o Twój komfort i zdrowy uśmiech!",
    backgroundImagePath: `url(${require("./../../assets/images/offer/en.webp")})`,
  },
  {
    title: "CHIRURGIA",
    description: "Profesjonalne zabiegi chirurgiczne w jamie ustnej.",
    modalText:
      "Chirurgia stomatologiczna to zaawansowane zabiegi, takie jak usuwanie zębów zatrzymanych, resekcje korzeni, przygotowanie kości do implantacji czy usuwanie torbieli. Zabiegi są bezbolesne dzięki znieczuleniu miejscowemu lub sedacji. Każdy zabieg poprzedza konsultacja z diagnostyką RTG. Stosujemy nowoczesne technologie, co zapewnia precyzję, bezpieczeństwo i szybkie gojenie. Zapewniamy profesjonalną opiekę i komfort. Umów się na konsultację, by zadbać o zdrowy i pełny uśmiech!",
    backgroundImagePath: `url(${require("./../../assets/images/offer/chiru.webp")})`,
  },
  {
    title: "PROTETYKA",
    description: "Precyzyjne odbudowy protetyczne.",
    modalText:
      "Protetyka odbudowuje brakujące zęby, przywracając estetykę i funkcjonalność. Oferujemy korony, mosty, protezy oraz rekonstrukcje na implantach, które zapewniają stabilność i naturalny wygląd. Dzięki nowoczesnym technologiom, jak skanery cyfrowe i CAD/CAM, tworzymy precyzyjne i trwałe rozwiązania. Każdy plan leczenia dostosowujemy do indywidualnych potrzeb pacjenta. Nie zwlekaj - zadbaj o komfort i pewność siebie. Umów się na konsultację i odkryj możliwości protetyki!",
    backgroundImagePath: `url(${require("./../../assets/images/offer/leaf.webp")})`,
  },
  {
    title: "STOMATOLOGIA ZACHOWAWCZA",
    description: "Leczenie próchnicy zębów",
    modalText:
      "Stomatologia zachowawcza to profilaktyka, leczenie próchnicy i odbudowa zębów, aby zachować ich zdrowie i estetykę. Regularne wizyty kontrolne i higienizacja zapobiegają poważnym problemom. W przypadku ubytków stosujemy trwałe, światłoutwardzalne wypełnienia o naturalnym wyglądzie. Leczymy także nadwrażliwość, wzmacniając szkliwo i chroniąc zęby. Dbamy o komfort pacjenta i stosujemy nowoczesne materiały. Zadbaj o swoje zęby - umów się na wizytę!",
    backgroundImagePath: `url(${require("./../../assets/images/offer/za.webp")})`,
  },
  {
    title: "ORTODONCJA",
    description: "Perfekcyjny prosty uśmiech",
    modalText:
      "Ortodoncja nakładkowa to nowoczesne i dyskretne rozwiązanie do prostowania zębów. Dzięki przezroczystym nakładkom (alignerom) możesz poprawić uśmiech bez widocznych aparatów stałych. Nakładki są wykonane na podstawie skanów 3D, a pacjent zmienia je co 1-2 tygodnie. Są zdejmowane podczas jedzenia i higieny, zapewniając wygodę i komfort. Leczenie jest skuteczne w wielu przypadkach, a efekty widoczne po kilku miesiącach. Skontaktuj się z nami, by uzyskać piękny uśmiech w komfortowy sposób!",
    backgroundImagePath: `url(${require("./../../assets/images/offer/ortho.webp")})`,
  },
  {
    title: "DIAGNOSTYKA",
    description: "Punktowe zdjęcie RTG",
    modalText:
      "Diagnostyka stomatologiczna to pierwszy krok w trosce o zdrowie zębów i dziąseł. Regularne badania pozwalają wcześnie wykrywać problemy, zanim staną się poważne. Dzięki nowoczesnym technologiom, takim jak RTG, tomografia komputerowa czy kamery wewnątrzustne, możemy precyzyjnie ocenić stan jamy ustnej. Wczesne wykrycie próchnicy, chorób dziąseł czy patologicznych zmian pozwala uniknąć bólu i kosztownego leczenia. W naszej klinice dbamy o precyzję i komfort pacjenta, oferując indywidualne podejście. Umów się na wizytę i zadbaj o zdrowie swojego uśmiechu!",
    backgroundImagePath: `url(${require("./../../assets/images/offer/xray.webp")})`,
  },
  {
    title: "WYBIELANIE ZĘBÓW",
    description: "Zabieg estetyczny",
    modalText:
      "Wybielanie zębów to popularny zabieg, który przywraca jasny, promienny uśmiech. Przebarwienia mogą wynikać z picia kawy, palenia tytoniu czy starzenia się. Dzięki nowoczesnym metodom, jak wybielanie w gabinecie z aktywowanymi żelami wybielającymi lub wybielanie domowe z indywidualnie dopasowanymi nakładkami, możesz uzyskać natychmiastowe lub stopniowe efekty. Zanim rozpoczniesz zabieg, przeprowadzamy konsultację, by ocenić stan zębów. Wybielanie jest bezpieczne, a efekty utrzymują się długo, o ile dbasz o higienę i unikasz produktów barwiących. Skontaktuj się z nami, by umówić się na konsultację i cieszyć się promiennym uśmiechem!",
    backgroundImagePath: `url(${require("./../../assets/images/offer/wybielanie.webp")})`,
  },

  {
    title: "HIGIENIZACJA",
    description: "Gabinetowe oczyszczanie zębów z osadu i kamienia",
    modalText:
      "Higienizacja to kluczowy zabieg profilaktyczny, który dba o zdrowie zębów i dziąseł, usuwając osad, kamień nazębny i przebarwienia. Regularne wykonywanie higienizacji zapobiega próchnicy, chorobom dziąseł i paradontozie. Zabieg obejmuje skaling (usuwanie kamienia), piaskowanie (usuwanie osadów) oraz polerowanie i aplikację fluoru, który wzmacnia szkliwo. Higienizacja jest szybka, bezbolesna i skuteczna. Warto wykonywać ją co 6 miesięcy, aby utrzymać zdrowie jamy ustnej i zapobiec poważniejszym problemom. W naszej klinice korzystamy z nowoczesnych technologii, dbając o komfort pacjenta. Zadbaj o zdrowy uśmiech – umów się na wizytę i ciesz się świeżością każdego dnia!",
    backgroundImagePath: `url(${require("./../../assets/images/offer/higienizacja.webp")})`,
  },
];

const Offer = () => (
  <div className="tiles-section">
    {tilesData.map((tile, index) => (
      <Tile
        key={index}
        title={tile.title}
        description={tile.description}
        modalText={tile.modalText}
        imagePath={tile.backgroundImagePath}
      />
    ))}
  </div>
);

export default Offer;
