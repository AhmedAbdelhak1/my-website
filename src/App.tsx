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
    <Content/>
    <Technologies/>
    <Aboutme/>
    <Contactme/>
    <Footer/>
      

    </div>
      
    
  );
}

export default App;
