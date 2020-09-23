import React from 'react';
import './App.css';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Content from './components/Content';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Technologies from './components/Technologies';

function App() {
  return (
    
    <div className="App">
    <Navbar/>
    <section id="content"><Content/></section> 
    <section id="tehnologies"><Technologies/></section>
    <section id="aboutme"><Aboutme/></section>
    <section id="contactme"><Contactme/><Footer/></section>
    
    
    
    
      

    </div>
      
    
  );
}

export default App;
