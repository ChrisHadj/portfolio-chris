import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import Typed from 'react-typed';

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am Christophe
                    <br/>
                    <span><Typed
                        strings={[
                            'Front-end Developer', 'React Js', 'Self-Taught'
                        ]}
                        typeSpeed={50}
                        backSpeed={40}
                        loop
                    ></Typed></span>
                </h1>
                
                
            </header>
        </div>
    )
}

export default HomePage;