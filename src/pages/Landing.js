import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Landing.css';

const Landing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showDescription, setShowDescription] = useState(false);
    const [showUnregisteredPopup, setShowUnregisteredPopup] = useState(false);

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://pd773bswfjcndfpcuvqosyl5sy.appsync-api.us-west-2.amazonaws.com/graphql', {
                email: email,
                password: password
            });

            if (response.data && response.data.status === 'unregistered') {
                setShowUnregisteredPopup(true);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }     
    };

    const logoRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [lastX, setLastX] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [velocity, setVelocity] = useState(0);
    const lastTime = useRef(Date.now());

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setLastX(e.clientX);
        lastTime.current = Date.now();
        logoRef.current.classList.remove('logo-spinning');
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            const currentTime = Date.now();
            const deltaTime = currentTime - lastTime.current;
            const deltaX = e.clientX - lastX;
            const newRotation = rotation + deltaX;
            
            setVelocity(deltaX / deltaTime);
            setRotation(newRotation);
            setLastX(e.clientX);
            lastTime.current = currentTime;
            logoRef.current.style.transform = `rotateY(${newRotation}deg)`;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging && velocity !== 0) {
                const newRotation = rotation + velocity;
                setRotation(newRotation);
                logoRef.current.style.transform = `rotateY(${newRotation}deg)`;
                setVelocity(velocity * 0.95);

                if (Math.abs(velocity) < 0.1) {
                    setVelocity(0);
                    logoRef.current.classList.add('logo-spinning');
                }
            }
        }, 20);

        return () => clearInterval(interval);
    }, [isDragging, rotation, velocity]);

    return (
        <div className="landing-wrapper">
            <div className="landing-container">
                <div className="circular-container">
                    <div 
                        className="logo logo-spinning" 
                        ref={logoRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    ></div>
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
                        Your email has been received, and we'll reach out when accepted!
                        <button onClick={() => setShowUnregisteredPopup(false)}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Landing;
