import React from "react";
import '../styles/Home.css'
function Home(){
    return(
        <div className="homepage" style={{backgroundImage:`url("images/bg.jpeg")`}}>
            <div className="house178">
                <div className="logoContainer">
                    <img className="logo" src="images/logo.png" alt="house178 logo"></img>
                    <h3>HOUSE 178</h3>
                </div>
               <div className="nav">
                <ul className="navbar">
                    <li className="navlink"><a href="Home.jsx">HOME</a></li>
                    <li className="navlink"><a href="About.html">ABOUT</a></li>
                    <li className="navlink"><a href="#Contact">CONTACT</a></li>
                    <li className="navlink"><a href="#Event">EVENT</a></li>
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
                    <img src="images/icon.png" alt="location icon"></img>
                    <p>House 178 Lounge, Airways Oyemekun Road. Akure.</p>
                </div>
            </div>
        </div>
    )
}

export default Home

