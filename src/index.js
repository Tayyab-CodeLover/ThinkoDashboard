import React from "react";
import ReactDOM from "react-dom/client";
import { CustomThemeProvider } from "./Components/CustomThemeProvider";
import App from "./App";
import { BrowserRouter } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <CustomThemeProvider >
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </CustomThemeProvider >
);
