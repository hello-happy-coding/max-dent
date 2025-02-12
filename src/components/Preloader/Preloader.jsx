import { useEffect, useState } from "react";
import "./Preloader.css";
import Kitek from "../../assets/images/kitek1.gif"; // Ścieżka do GIF-a

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // Preloader znika po 5s
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="loader">
        <img src={Kitek} alt="Ładowanie..." className="kitek-gif" />
      </div>
    </div>
  );
};

export default Preloader;
