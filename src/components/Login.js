// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';
import romify from '../romify.png'; // Importing the image

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        terms: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.terms) newErrors.terms = 'You must agree to the terms';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Form is valid, proceed with submission (e.g., API call)
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-left">
                <h1>SignIn</h1>
                <p>Get your hands on latest community builds with Romify</p>
                <button className="google-btn">Login with Google</button>
                <div className="divider"><span>or</span></div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="terms">
                        <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} />
                        <label htmlFor="terms">I agree to all terms and conditions of Romify.</label>
                        {errors.terms && <p className="error">{errors.terms}</p>}
                    </div>
                    <button type="submit" className="auth-btn">Login</button>
                </form>
                <p className="auth-footer">Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
            <div className="auth-right">
                <img src={romify} alt="Romify" className="auth-image" />
                <div className="auth-info">
                    <h2>Enter the world of Custom ROMs</h2>
                    <div className="auth-logos">
                        <p>💯 Trusted ROM</p>
                        <p>📞 Community Support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
