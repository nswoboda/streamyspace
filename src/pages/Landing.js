import React, { useState } from 'react';
import './Landing.css';

const Landing = () => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="landing-wrapper">
            <div className="landing-container">
                <div className="circular-container">
                    <div className="logo"></div>
                    <div className="login-fields">
                        <input type="text" placeholder="Email" className="login-input"/>
                        <input type="password" placeholder="Password" className="login-input"/>
                        <button className="login-button">Get Started</button>
                    </div>
                    {!showDescription && (
                        <div className="about-us-text" onClick={() => setShowDescription(true)}>
                            About Us
                        </div>
                    )}
                </div>
                {showDescription && (
                    <div className="company-description-popup">
                        Digital Content Company based in Spokane, WA <br /> <br /> 
                        A unified platform for creators and companies
                        <button onClick={() => setShowDescription(false)}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Landing;
