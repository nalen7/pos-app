import React from 'react';
import './App.css';
import Menutap from './components/menutap.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
          <div className='header'>Imform Cafe POS</div>
          <Menutap />
          <Footer />
    </div>
  );
}

export default App;
