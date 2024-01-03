import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App1 from "./App1";
import { BrowserRouter } from "react-router-dom";
import 'resize-observer-polyfill';
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App1 />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);











