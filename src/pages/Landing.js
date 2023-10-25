import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import { Auth } from 'aws-amplify';

const Landing = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showDescription, setShowDescription] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const user = await Auth.signIn(email, password);
            console.log(user);

            // Assuming user attributes contain a 'status' that indicates if they are approved or pending.
            if (user.attributes['custom:status'] === 'pending') {
                // Navigate to Client Admin (formerly Onboarding) page
                navigate('/client-admin');
                return;
            }

            // Navigate to the main dashboard if the user is approved.
            navigate('/dashboard');

        } catch (error) {
            console.error('Error during login:', error);

            switch (error.code) {
                case 'UserNotConfirmedException':
                    setErrorMessage('Please confirm your email address.');
                    break;
                case 'PasswordResetRequiredException':
                    setErrorMessage('Password reset is required.');
                    break;
                case 'NotAuthorizedException':
                    setErrorMessage('Incorrect email or password.');
                    break;
                default:
                    setErrorMessage('An error occurred. Please try again.');
            }
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
            </div>
        </div>
    );
}

export default Landing;
