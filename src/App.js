import React from "react";
import "./App.css";
import StickyFooter from "./components/StickyFooter/StickyFooter";
import Main from "../src/components/Main/Main";
import BackToTop from "./components/ScrollToTop/ScrollToTop";
import TelefonButton from "./components/TelefonButton/TelefonButton";
import "@fontsource/cormorant-garamond";
import CookieModal from "./components/Cookie/Cookie";
// import { First } from 'react-bootstrap/esm/PageItem';
import Preloader from "../src/components/Preloader/Preloader";

function App() {
  return (
    <div className="App">
      <Preloader />
      <Main />
      <StickyFooter />
      <BackToTop />
      <TelefonButton />
      <CookieModal />
    </div>
  );
}

export default App;
