// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="main">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;
