import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import SessionContext from "./context/SessionContext.jsx";

createRoot(document.getElementById("root")).render(
  <SessionContext>
    <App />
  </SessionContext>,
);
