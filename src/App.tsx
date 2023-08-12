// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="main">
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
