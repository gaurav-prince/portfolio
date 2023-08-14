import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ThemeContextWrapper from "./components/ThemeContextWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>{" "}
  </ThemeContextWrapper>
);
