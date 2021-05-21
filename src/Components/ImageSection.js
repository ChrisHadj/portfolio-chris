import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            
            <div className="about-info">
                <h4>I am<span> Christophe</span></h4>
                <p className="about-text">
                    
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Hadjigeorgiou Christophe</p>
                        <p>: 34</p>
                        <p>: Belgian</p>
                        <p>: French, English</p>
                        
                        <p>: Greece, France, Belgium</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ImageSection;