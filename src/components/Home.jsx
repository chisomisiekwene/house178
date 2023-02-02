import React from "react";
import '../styles/Home.css'
import { useState } from "react";

function Home(){
    const [isActive, setIsActive] = useState(false);

    function toggleActive(){
        setIsActive(prevState => !prevState)
    }
    
    return(
        <div className="homepage" style={{backgroundImage:`url("images/background.png")`}} id="Home">
            <div className="house178">
                <div className="logoContainer">
                    <img className="logo" src="images/logo.png" alt="house178 logo"></img>
                </div>

                <div className="menubar" onClick={toggleActive}>
                    <img src="images/menu-icon.png" alt="menu icon" className="menu"/>
                </div>

               <div className={`nav ${isActive ? 'active' : ''}`}>
                <ul className="navbar">
                    <li className="navlink"><a href="#Home" onClick={() => setIsActive(false)}>HOME</a></li>
                    <li className="navlink"><a href="#About" onClick={() => setIsActive(false)}>ABOUT</a></li>
                    <li className="navlink"><a href="#contact" onClick={() => setIsActive(false)}>CONTACT</a></li>
                    <li className="navlink"><a href="#services" onClick={() => setIsActive(false)}>SERVICES</a></li>
                    <li className="navlink"><a href="#gallery" onClick={() => setIsActive(false)}>GALLERY</a></li>
                </ul>
                
               </div>
            </div>

            <div className="tagline">
                <h4>Savour. Sip. Socialize</h4>
            </div>  

            <div className="book">
                <div className="link">
                    <a href="www.google.com">Book a space</a>
                </div>
                <div className="location">
                    <img className="location-icon" src="images/icon.png" alt="location icon"></img>
                    <p>House 178 Lounge, Airways Oyemekun Road. Akure.</p>
                </div>
            </div>
        </div>
    )
}

export default Home

