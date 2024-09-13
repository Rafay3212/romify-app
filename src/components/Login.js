// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {InputGroup,InputGroupAddon,InputGroupText
} from "reactstrap";
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
       

        <div className="h-screen flex">
        <div className="w-1/2 bg-white flex flex-col justify-center items-center p-8">
           <h1 style={{color: '#D27419'}} >Romify</h1>
                <h1>SignIn</h1>
                <p>Get your hands on latest community <br></br> builds with Romify</p>
                <button className="google-btn" 
                style={{
                    borderRadius: '27px',
                   // width: '43',
                   // height:'45.77',
                    Border: '1.14',
                     padding: '8px 20px',  // Adjusts the button's size
                      fontSize: '16x',     // Decreases the font size
                         height: '40px',       // Sets a specific height
                              width: 'auto'  // Adjust the value to change the roundness
                  }}
                >Login with Google</button>
                <div className="divider"><span>------------------or------------------</span></div>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email" style={{ textAlign: "left", display: "block" }}>Email</label>
                        <InputGroup>
                                                         <InputGroupAddon>
                                                            <InputGroupText>
                                                               <i className="icon-user"></i>
                                                            </InputGroupText>
                                                            </InputGroupAddon>
                                                         
                        <input type="email" id="email" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange}  style={{
                                 borderRadius: '50px' // Adjust the value to change the roundness
                                  }}/>
                                  </InputGroup>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password" style={{ textAlign: "left", display: "block" }}>Password</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} style={{
                                 borderRadius: '50px' // Adjust the value to change the roundness
                                  }}/>
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="terms">
                    <label htmlFor="terms" style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} />
                        I agree to all terms and conditions of Romify.
                        </label>
                        {/* <label htmlFor="terms">I agree to all terms and conditions of Romify.</label> */}
                        {errors.terms && <p className="error">{errors.terms}</p>}
                    </div>
                    <button 
                     style={{
                        borderRadius: '27px',
                        padding: '8px 20px',  // Adjusts the button's size
                          fontSize: '20px',     // Decreases the font size
                             height: '40px',       // Sets a specific height
                                 width: 'auto'  // Adjust the value to change the roundness
                      }}
                    type="submit" className="auth-btn">Login</button>
                </form>
                <p className="auth-footer" style={{color: '#D27419', marginLeft:'40px'}}>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
             <div className="auth-right relative flex flex-col items-center justify-center h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${romify})` }}>
    <h2 className="text-white text-3xl font-bold absolute top-4">Join the world of Custom ROMs</h2>
    
    <div className="auth-logos w-full flex justify-between absolute bottom-4 px-8">
        <p className="text-white text-lg">💯 Trusted ROM</p>
        <p className="text-white text-lg">📞 Community Support</p>
    </div>
</div>
        </div>
      
    );
}
