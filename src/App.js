import React from 'react';
import './App.css';
import StickyFooter from './components/StickyFooter/StickyFooter';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import "@fontsource/roboto";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <StickyFooter />
    </div>
  );
}

export default App;