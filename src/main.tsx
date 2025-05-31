import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { SkillProvider } from "./context/SkillContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SkillProvider>
      <App />
    </SkillProvider>
  </React.StrictMode>
);
