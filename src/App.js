import React from 'react';
import './index.css';
import Home from './components/Home';
import Services from './components/services';
import About from './components/About';
import Contact from './components/contact';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
    </div>
  );
}

export default App;
