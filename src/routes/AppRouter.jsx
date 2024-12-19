import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../components/login";
import SignIn from "../components/sigin";


const AppRouter = () => {
  return (
      <Router>
        <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/sigin' element={<SignIn />} />

        </Routes>
      </Router>
  );
};

export default AppRouter;
