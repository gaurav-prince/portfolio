// import { useState } from 'react'
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="main">
      <Header />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
