import React from 'react'
import { useState } from 'react';
import FancyCarousel from "react-fancy-circular-carousel";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import Highlight from './Highlight';
import boy from "../images/boy.png"
import image1 from '../images/c++.png';
import image2 from '../images/css.jpg';
import image3 from '../images/html.png';
import image4 from '../images/c.png';
import image5 from '../images/bootstrap.png';
import image6 from '../images/git.webp';
import image7 from '../images/js.jpeg';
import image8 from '../images/mysql.png';
import image9 from '../images/python.png';
import image10 from '../images/react.png';
import image11 from '../images/tailwind.png';
const Tech = () => {
    const images = [image1, image2, image3, image4,image5,image6,image7,image8,image9,image10,image11];
    const [focusElement, setFocusElement] = useState(0);
    const info = ['C++', 'CSS', 'HTML5', 'C','Bootstrap','GIT','JavaScript','MySql','Python','React','TailwindCSS'];

    return (
        <div className="sec3" id="sec3_2">
                <div className="project_head">
                <h1><Highlight>TechStack</Highlight> : What I've learnt sooo far!</h1>
                </div>
                <div className="tech_container">
                    <div className="info-box-wrapper">
                        <img src={boy}/>
                        <p> {info[focusElement]} </p>
                    </div>
                    <div className="tech_box">
                        <FancyCarousel images={images} 
                        setFocusElement={setFocusElement}
                        carouselRadius={200}
                        peripheralImageRadius={40}
                        centralImageRadius={100}
                        focusElementStyling={{border: '2px solid yellow'}}
                        autoRotateTime={2}
                        borderWidth={4}
                        borderHexColor={'1c364f'}/>
                    </div>
                </div>
        </div>
    );
}

export default Tech
