import React from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div>
      <Header />
      <MobileMenu />
      <Home />
      <About />
      <Contact />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
