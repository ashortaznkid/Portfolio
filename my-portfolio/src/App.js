import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <div className='App'>
      <Header />
      {currentSection === 'About Me' && <AboutMe/>}
      {currentSection === 'Portfolio' && <Portfolio/>}
      {currentSection === 'Contact' && <Contact/>}
      <Footer/>
    </div>
  );
}

export default App;
