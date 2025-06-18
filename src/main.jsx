import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/GlobalStyle.js";
import AppRouter from "../Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRouter />
  </React.StrictMode>
);
