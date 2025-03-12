import React from 'react';
import './App.css';
import StickyFooter from './components/StickyFooter/StickyFooter';
import Main from '../src/components/Main/Main';
import BackToTop from './components/ScrollToTop/ScrollToTop';
import TelephoneButton from './components/TelephoneButton/TelephoneButton';
import '@fontsource/cormorant-garamond';
import CookieModal from './components/CookieModal/CookieModal';
import Preloader from '../src/components/Preloader/Preloader';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000); // Preloader znika po 5s
  }, []);

  if (loading) {
    return <Preloader />
  };

  return (
    <div className='App'>
      <Main />
      <StickyFooter />
      <BackToTop />
      <TelephoneButton />
      <CookieModal />
    </div>
  );
}

export default App;
