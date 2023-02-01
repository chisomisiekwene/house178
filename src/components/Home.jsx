import React from "react";
import '../styles/Home.css'

function Home(){
    return(
        <div className="homepage" style={{backgroundImage:`url("images/background.png")`}} id="Home">
            <div className="house178">
                <div className="logoContainer">
                    <img className="logo" src="images/logo.png" alt="house178 logo"></img>
                    <h3>HOUSE 178</h3>
                </div>
               <div className="nav">
                <ul className="navbar">
                    <li className="navlink"><a href="#Home">HOME</a></li>
                    <li className="navlink"><a href="#About">ABOUT</a></li>
                    <li className="navlink"><a href="#contact">CONTACT</a></li>
                    <li className="navlink"><a href="#services">SERVICES</a></li>
                </ul>
                <img src="images/menu-icon.png" alt="menu icon" className="menu"/>
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
                    <img src="images/icon.png" alt="location icon"></img>
                    <p>House 178 Lounge, Airways Oyemekun Road. Akure.</p>
                </div>
            </div>
        </div>
    )
}

export default Home

