import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import "./styles/global.scss";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import AppWrapper from "./AppWrapper";

function App() {

  return (
    <Router>
      <div className="App">
        <AppWrapper />
      </div>

    </Router >
  );
}

export default App;
