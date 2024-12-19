
import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import AboutUs from './components/aboutus-component/aboutus';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Footer />
    </div>

  );
}

export default App;
