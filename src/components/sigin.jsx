import React, { useState } from 'react';

import validator from "validator";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (e) => {
    const email = e.target.value;
    setEmail(email);

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)');
    } else {
      setEmailError('Enter a valid email!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent default form submission

    // Check if email is valid
    if (!validator.isEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }

    // Check if password is entered
    if (password === '') {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }

    if (email && password) {
      // Perform registration logic (e.g., send data to backend)
      alert('Registration Successful!');
    }
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          {/* Form Title */}
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Sign In
          </h1>

          {/* Form Start */}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={validateEmail}
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {/* Display Email Error Message */}
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
                className="w-full p-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {/* Display Password Error Message */}
              {passwordError && (
                <p className="text-sm text-red-500 mt-2">{passwordError}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Register
            </button>
          </form>

          {/* Already Registered? */}
          <p className="mt-4 text-sm text-center text-gray-500">
            Already have an account?{" "}
            {/* <Link to="/login" className="text-purple-600">Login</Link> */}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
