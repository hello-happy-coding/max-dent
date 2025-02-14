import React from 'react';
import './App.css';
import StickyFooter from './components/StickyFooter/StickyFooter';
import Main from '../src/components/Main/Main';
import BackToTop from './components/ScrollToTop/ScrollToTop';
import TelephoneButton from './components/TelephoneButton/TelephoneButton';
import '@fontsource/cormorant-garamond';
import CookieModal from './components/CookieModal/CookieModal';
import Preloader from '../src/components/Preloader/Preloader';

function App() {
  return (
    <div className='App'>
      <Preloader />
      <Main />
      <StickyFooter />
      <BackToTop />
      <TelephoneButton />
      <CookieModal />
    </div>
  );
}

export default App;
