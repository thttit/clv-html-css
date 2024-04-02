import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import HomePage from "./components/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
