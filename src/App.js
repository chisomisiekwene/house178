import React from 'react';
import './index.css';
import Home from './components/Home';
import Services from './components/services';
import About from './components/About';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
