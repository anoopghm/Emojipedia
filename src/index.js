import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App";
import "./styles.css";

const root = document.getElementById("root");

const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootContainer = createRoot(root);
rootContainer.render(rootElement);
