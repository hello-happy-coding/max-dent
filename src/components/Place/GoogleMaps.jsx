import React, { useEffect } from "react";

const GoogleMap = () => {
  useEffect(() => {
    const initMap = () => {
      // Inicjalizacja mapy
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.253, lng: 19.279 }, // Punkt centralny między Olkuszem a Katowicami
        zoom: 8,
      });

      // Lista lokalizacji
      const locations = [
        { address: "Nowa 13, Olkusz", lat: 50.2759827, lng: 19.556 },
        { address: "Rolna 17, Katowice", lat: 50.231168, lng: 19.004 },
      ];

      // Dodanie markerów
      locations.forEach((location) => {
        new window.google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.address,
        });
      });
    };

    // Ładowanie Google Maps API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);

    return () => {
      // Usunięcie skryptu po odmontowaniu komponentu
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          width: "100%",
          height: "500px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};

export default GoogleMap;
