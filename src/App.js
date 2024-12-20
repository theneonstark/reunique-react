<<<<<<< HEAD

import React, { Component } from 'react';
import './App.css';
// import Header from './components/header';
// import Footer from './components/footer';
// import AboutUs from './components/aboutus-component/aboutus';
import AppRouter from './routes/AppRouter';
const App = () => {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <AboutUs/>
      <Footer /> */}
<AppRouter />
    </div>

=======
import React from "react";
import Header from "./components/header"; // Adjust path if necessary
import Footer from "./components/footer"; // Adjust path if necessary
import AppRouter from "./routes/AppRouter"; // Adjust path if necessary
import './index.css';

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
>>>>>>> 848b7bfdcabad5bcee5f83a2c75c368b54f75661
  );
};

export default App;
