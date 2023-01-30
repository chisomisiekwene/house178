import React from "react";
import '../styles/contact.css';
import '../styles/Home.css';

function Contact(){
    return(
    <div className="contactContainer">
    <h3 className="contactheader">Contact Us</h3>
    <div className="logo-workinghour">
        <div className="logoContainer">
            <img className="logo" src="images/logo.png" alt="house178 logo"></img>
            <h3>HOUSE 178</h3>
            <p>Bar & lounge</p>
        </div>
        <div className="workinghour">
            <h3>Working Hours</h3>
        </div>
    </div>
    <div className="address-hour">
        <div className="addressContainer">
            <div className="address">
                <div className="icon"><img src="images/icon.png" alt="location icon" /></div>
                <div className="texts">House 178 Lounge, Airways Oyemekun Road. Akure, Ondo State.</div>
            </div>
            <div className="phone">
                <div className="icon"><img src="images/phone.png" alt="phone icon"/></div>
                <div className="texts">+2347019583344, +2349075745485</div>
            </div>
            <div className="email">
                <div className="icon"><img src="images/email.png" alt="email icon"/></div>
                <div className="texts"> Info@house178.net</div>
            </div>
        </div>
        <div className="time-days">
            <div className="time">
                <div className="icon"><img src="images/time.png" alt="time icon"/></div>
                <div className="texts">9am-12am</div>
            </div>
            <div className="days">
                <div className="icon"><img src="images/day.png" alt="calendar icon"/></div>
                <div className="texts">Monday - Sunday</div>
            </div>
        </div>
    </div>

    <div className="footer">
        <div className="socialmediaicons">
            <img src="images/whtasapp.png" alt="" />
            <img src="images/facebook.png" alt="" />
            <img src="images/twitter.png" alt="" />
            <img src="images/instagram.png" alt="" />
        </div>
        <div className="copy">
            <p>Copywright@House178 2023</p>
        </div>
        
    </div>
</div>
    )
    
}

export default Contact

