import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import "./styles/global.scss";
import MainApp from "./MainApp/MainApp";
import Login from "./MainApp/Section/Login";
import Logout from "./MainApp/Section/Logout";
import PrivateRoute from "./Routes/PrivateRoute";

function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={MainApp} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/test" element={<h1>hello</h1>} />
    </Routes>
  );
}

export default AppWrapper;
