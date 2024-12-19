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
  );
};

export default App;
