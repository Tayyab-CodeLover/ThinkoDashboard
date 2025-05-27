import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { CustomThemeProvider } from "./Components/CustomThemeProvider";
import App from "./App";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <CustomThemeProvider >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CustomThemeProvider >
);
