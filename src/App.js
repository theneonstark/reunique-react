
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

  );
}

export default App;
