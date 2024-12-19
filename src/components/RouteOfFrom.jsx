import React from 'react';
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

 import Login from './login';


const RouteOfFrom = () => {
  return (
    <Router>
      <Routes>
            <Route to="/" element={<Login />} />
      </Routes>
    </Router>
   
  );
};

export default RouteOfFrom;
