import React from 'react';
import './App.css';
import Menutap from './components/menutap.js';
import Footer from './Footer.js';
import Basket from './components/Basket';

function App() {
  return (
    <div>
    <div className="App">
          <div className='header'>Imform Cafe POS</div>
          <Menutap />
    </div>
    <div>
      <div style={{float:"left"}} className="basket"><Basket/></div>
      <div style={{float:"right"}}></div>
    </div>
          <Footer />
    </div>
  );
}

export default App;
