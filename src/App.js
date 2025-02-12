import React from 'react';
import './App.css';
import StickyFooter from './components/StickyFooter/StickyFooter';
import Main from "../src/components/Main/Main";
import BackToTop from './components/ScrollToTop/ScrollToTop';
import TelefonButton from "./components/TelefonButton/TelefonButton";
import  "@fontsource/cormorant-garamond";
import CookieModal from './components/Cookie/Cookie';
// import { First } from 'react-bootstrap/esm/PageItem';




function App() {
  return (
    <div className="App">
      <Main />
      <StickyFooter />
      <BackToTop />
      <TelefonButton />
      <CookieModal />
    </div>
  );
}

export default App;