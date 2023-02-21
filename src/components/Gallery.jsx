import React from "react";
import { useState } from "react";
import data from "./galleryImages";
import '../styles/gallery.css'

function Gallery() {
    const[popUp, setPopUp] = useState(false);
    const[clickedImage, setClickedImage] = useState(data.length + 1);
    // const [view, setView] = useState(false)

    function handleClick(index){
        if (clickedImage === index){
            setClickedImage(data.length + 1)
        }
        else{
            setPopUp(true)
            setClickedImage(index)
        }

        
    }

   
    return (
        <>
        <div className="galleryContainer" id="Gallery" >
            <div className= "gallery-pictureContainer">
                {data.map((item, index) => (
                    <img key={index} src={item.src} alt="pictures" className= "photos" onClick={() => handleClick(index)}></img>
                ))}
            </div>
            {/* <button className="view-btn" onClick={() => setView(true)}>view more</button> */}
        </div>
        {popUp && <div className="popup-container">
            {data.map((image, index) => (
                clickedImage === index && <img key={index} src={image.src} alt="pictures" className= "popup-picture"></img>
            ))}
            <button className="close-btn" onClick={() => setPopUp(false)}>close</button>
        </div> }

        {/* {view && <div className="viewContainer" id="Gallery">
            <div className= "view-pictureContainer">
                {data.map((item, index) => (
                    <img key={index} src={item.src} alt="pictures" className= "view-photos" onClick={() => handleClick(index)}></img>
                ))}
            </div>
            <button className="viewless-btn" onClick={() => setView(false)}>view less</button>
        </div>
        } */}
       </>
    )                                                        
}


export default Gallery
