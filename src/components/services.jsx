import React from "react";
import '../styles/services.css'
function Services(){
    return(
        <div className="services" id="services">
            <div className="meetings">
                <div className="description">
                    <h3>Where<br></br> Friends & Cocktails <br></br>Meet</h3>
                    <p>Looking for a spot to unwind after a long day? Look no further than our cozy bar and lounge.</p>
                    <div className="link">
                        <a href="www.google.com">Book a space</a>
                    </div>
                </div>
                <div className="pictureContainer">
                     <div className="first"><img    src="images/page1.png" alt="first-image" /></div> 
                    <div className="second"> <img src="images/page 2.png"/></div>
                </div>
               
            </div>
            
            <div className="fun">
                <div className="fun-pictureContainer">
                    <img className="fun-first" src="images/page3.png" alt="Table tennis" />
                </div>    
                <div className="description">
                    <h3>Mix, Mingle, and Enjoy<br/> at Our Hip Bar and Lounge</h3>
                    <p>If you're looking for a place to let loose and have some<br/> fun, 
                        our trendy bar and lounge is the perfect spot. 
                        From<br/> our delicious drinks to our lively atmosphere,
                        we've<br/> got everything you need for a night out with friends. 
                    </p>
                    <div className="link">
                        <a href="www.google.com">Book a space</a>
                    </div>
                    
                </div>
            </div>
            
            <div className="bar">
                <div className="bar-description">
                    <h3>Raise a Glass to<br/> good times at our<br/> Bar</h3>
                    <p>Looking for a spot to unwind after a long day?<br/> Look no further than our cozy bar and lounge.<br/>
                        Whether you're in the mood for a classic<br/> cocktail or something a little more adventurous,<br/> our expert mixologists have you covered.
                         And with<br/> a relaxed atmosphere and friendly staff, you're sure<br/> to have a great time
                    </p>
                    
                    <div className="bar-link">
                        <a href="www.google.com">Book a space</a>
                    </div>
                </div>
                <div className="bar-pictureContainer">
                    <img className="bar-first" src="images/page4.png" alt="" />
                </div>   
            </div>
        </div>
    )
}
export default Services