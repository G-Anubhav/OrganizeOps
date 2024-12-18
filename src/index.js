import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {" "}
    <Routes>
      {" "}
      <Route path="/" element={<Navigate to="/tasks" />} />{" "}
      <Route path="/tasks" element={<App />} />{" "}
    </Routes>{" "}
  </Router>
);
