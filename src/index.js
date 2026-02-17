// Importing React core library
import React from "react";

// ReactDOM is used to render React app into browser
import ReactDOM from "react-dom/client";

// Importing main App component
import App from "./App";

// Creating root element where React app will mount
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the App component inside StrictMode
// StrictMode helps in identifying potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
