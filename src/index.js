import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OfferDetail from "./components/OfferDetail/OfferDetail";






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <React.StrictMode>
    <Routes>
  <Route path="/" element={<App />} />
  <Route
        path="/implantologia"
        element={
          //  <OfferDetail id="implantologia" srcImg={ImplantPhoto} text="text" />
           <OfferDetail id="implantologia" text="text" />

        }
      />
      <Route path="/protetyka" element={<OfferDetail id="protetyka" />} />
      <Route path="/chirurgia" element={<OfferDetail id="chirurgia" />} />
      <Route path="/endodoncja" element={<OfferDetail id="endodoncja" />} />
      <Route path="/diagnostyka" element={<OfferDetail id="diagnostyka" />} />
      <Route
        path="/stomatologia-zachowawcza"
        element={<OfferDetail id="stomatologiazachowawcza" />}
      />
      <Route path="/ortodoncja" element={<OfferDetail id="ortodoncja" />} />
      <Route
        path="/wybielanie-zebow"
        element={<OfferDetail id="wybielanie-zębów" />}
      />
  {/* <OfferRoutes /> */}


</Routes>
  </React.StrictMode>

  </BrowserRouter>
);

reportWebVitals();
