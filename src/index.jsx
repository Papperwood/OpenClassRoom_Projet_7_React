import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import Logement from "./pages/Logement";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Apropos">
          <Apropos />
        </Route>
        <Route path="/Error">
          <Error />
        </Route>
        <Route path="/Logement">
          <Logement />
        </Route>
      </switch>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
