import React from 'react';
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