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
import ScrollButton from "./components/ScrollToTop";

function App() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setIsDark(true);
    } else {
      setTheme("light");
      setIsDark(true);
    }
  };

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
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`App ${theme} main`}>
      {loading ? (
        <>
          <HashLoader
            color="#0093E9"
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            id="hashloader"
          />
        </>
      ) : (
        <>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <ScrollButton />
        </>
      )}
    </div>
  );
}

export default App;
