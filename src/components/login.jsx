import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validator from "validator";
 
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
 // const [isFormValid, setIsFormValid] = useState(false);
 
  const validateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
 
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)');
    } else {
      setEmailError('Enter valid Email!');
    }
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Check if email and password are valid before submitting
    if (!validator.isEmail(email)) {
      setEmailError('Enter valid Email!');
    } else if (password === '') {
      alert('Password is required!');
    } else {
      alert('Login Successful!');
    }
  };
 
  return (
    <React.Fragment>
      <div className="flex items-center justify-center min-h-screen bg-bg-color">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          {/* Form Title */}
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
            Login to Your Account
          </h1>
 
          {/* Form Start */}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={validateEmail}
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:btn-text-color"
              />
              {/* Email Error Message */}
              {emailError && (
                <p className="text-sm text-red-500 mt-2">{emailError}</p>
              )}
            </div>
 
            {/* Password Field */}
            <div className="mb-4">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:btn-text-color"
              />
            </div>
 
            {/* Submit Button */}
            <button
              type="submit"
              className="login py-3 px-8 bg-transparent border-2 border-secondary-color text-secondary-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
            >
              Login
            </button>
          </form>
 
          {/* Already Registered? */}
          <p className="mt-4 text-sm text-center text-gray-500">
            Don't have an account? <Link to = "/sigin" className="text-black">Sign Up   </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}