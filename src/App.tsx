import { useState, useEffect, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  const [loading, setLoading] = useState(false);

  const override: CSSProperties = {
    position: "absolute",
    top: "40%",
    left: "45%",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="main">
      {loading ? (
        <>
          <HashLoader
            color="#0093E9"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        <>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
