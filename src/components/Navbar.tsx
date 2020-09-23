import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        
            <nav className="header">
                 <ul className="nav-items">
                  <li className="cool-link" ><a href="#content" >Home</a></li>
                    <li className="cool-link"><a href="#aboutme">About me</a></li>
                    <li className="cool-link"><a href="#contactme">Contact me</a></li>
                    
                </ul>  
            
            
            </nav>
        
    )
}

export default Navbar

