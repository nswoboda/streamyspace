import React, { useState } from 'react';
import axios from 'axios';
import './Landing.css';

const Landing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showDescription, setShowDescription] = useState(false);
    const [showUnregisteredPopup, setShowUnregisteredPopup] = useState(false);

    const handleLogin = async () => {
        try {
            // Send a request to your backend or directly to the AWS Lambda endpoint
            const response = await axios.post('https://csz6z3cz3i.execute-api.us-west-2.amazonaws.com/Production', {
                email: email,
                password: password // In a real-world scenario, you might not want to send the password
            });

            if (response.data && response.data.status === 'unregistered') {
                setShowUnregisteredPopup(true);
            }
            // Handle other responses or actions based on the response data
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="landing-wrapper">
            <div className="landing-container">
                <div className="circular-container">
                    <div className="logo"></div>
                    <div className="login-fields">
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="login-button" onClick={handleLogin}>Get Started</button>
                    </div>
                    <div className="about-us-text" onClick={() => setShowDescription(!showDescription)}>
                        About Us
                    </div>
                </div>
                {showDescription && (
                    <div className="company-description-popup">
                        <div className="spacing">Digital Content Company based in Spokane, WA</div>
                        <button onClick={() => setShowDescription(false)}>Close</button>
                    </div>
                )}
                {showUnregisteredPopup && (
                    <div className="company-description-popup">
                        Your email has been received, and we'll reach out when accepted.
                        <button onClick={() => setShowUnregisteredPopup(false)}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Landing;
