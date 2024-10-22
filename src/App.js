import React from 'react';
import './App.css';
import StickyFooter from './components/StickyFooter/StickyFooter';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <p>This is the main content of my website.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </main>
      <StickyFooter />
    </div>
  );
}

export default App;