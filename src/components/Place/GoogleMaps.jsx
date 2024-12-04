import React from "react";
import { useEffect } from "react";

const GoogleMap = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 50.0647, lng: 19.9409 }, // Center of Poland
        zoom: 6, // Adjust zoom level
      });

      // Geocode and add markers
      const geocoder = new window.google.maps.Geocoder();
      const addresses = [
        { address: "ul. Nowa 13, Olkusz", label: "A" },
        { address: "ul. Rolna 17/1, Katowice", label: "B" },
      ];

      addresses.forEach(({ address, label }) => {
        geocoder.geocode({ address }, (results, status) => {
          if (status === "OK") {
            new window.google.maps.Marker({
              position: results[0].geometry.location,
              map,
              label,
            });
          } else {
            console.error(`Geocode error: ${status}`);
          }
        });
      });
    };

    // Load the Google Maps script dynamically
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    script.onload = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }} />;
};

export default GoogleMap;
