import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StarshipProvider } from "./StarshipContext.jsx";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/starwars-ships">
      <StarshipProvider>
        <App />
      </StarshipProvider>
    </BrowserRouter>
  </React.StrictMode>
);
