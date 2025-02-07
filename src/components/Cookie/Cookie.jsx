import { useEffect, useState } from "react";
import "../Cookie/Cookie.css";

const CookieModal = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Sprawdź, czy użytkownik już zaakceptował cookies
    if (!localStorage.getItem("cookiesAccepted")) {
      setVisible(true); // Pokaż modal
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true"); // Zapisz akceptację w localStorage
    setVisible(false); // Ukryj modal
  };

  if (!visible) return null; // Jeśli modal jest ukryty, nie renderujemy nic

  return (
    <div className="modal-cook">
      <div className="modal-content">
        <h3>Cenimy prywatność użytkowników</h3>
        <p>
          Nasza strona wykorzystuje pliki cookie, aby formularz działał
          prawidłowo i umożliwiał bezpieczne przesyłanie danych. Pliki te są
          niezbędne do obsługi funkcji strony i przechowywania Twoich ustawień.
        </p>
        <button onClick={acceptCookies} id="accept-cookies">
          Akceptuję
        </button>
      </div>
    </div>
  );
};

export default CookieModal;
