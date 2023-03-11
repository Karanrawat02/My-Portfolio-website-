import React from 'react';
import './App.css';
import BasicNavbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
  
  return (
    <div className='App'>
        <BasicNavbar/>
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  
    );
  }

export default App;     

