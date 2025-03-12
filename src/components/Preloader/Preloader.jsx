import "./Preloader.css";
import preloader from "../../assets/gifs/preloader.gif"; // Ścieżka do GIF-a

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <img src={preloader} alt="Ładowanie..." className="preloader-gif" />
      </div>
    </div>
  );
};

export default Preloader;
