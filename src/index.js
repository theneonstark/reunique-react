<<<<<<< HEAD
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM from 'react-dom/client' for React 18
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Adjust the path if necessary

// Find the root element in your HTML
const rootElement = document.getElementById("root");
>>>>>>> 848b7bfdcabad5bcee5f83a2c75c368b54f75661

// Create the root using ReactDOM.createRoot
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
