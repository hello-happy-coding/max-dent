import React from 'react';
import './App.css';
import StickyFooter from './components/StickyFooter/StickyFooter';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import BackToTop from './components/ScrollToTop/ScrollToTop';
import TelefonButton from "./components/TelefonButton/TelefonButton";
import  "@fontsource/cormorant-garamond";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <StickyFooter />
      <BackToTop />
      <TelefonButton />
    </div>
  );
}

export default App;