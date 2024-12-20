import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../components/aboutus-component/aboutus";
import Header from "../components/header";
import Contact from "../components/contact";
import Support from "../components/support";
import Login from "../components/login"
import SignIn from "../components/signin"
import FAQs from "../components/faqs"
import RaiseTicket from "../components/RaiseTicket";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/support" element={<Support />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sigin' element={<SignIn />} />
      <Route path='/faqs' element={<FAQs/>} />
      <Route path='/raiseTicket' element={<RaiseTicket/>} />
    </Routes>
  );
};

export default AppRouter;
