import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Support from "../pages/Support";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </>
  );
};

export default AppRouter;
