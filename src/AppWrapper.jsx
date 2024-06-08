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
import Forgot from "./MainApp/Section/Forgot";
import Signup from "./MainApp/Section/Signup";
import Themes from "./MainApp/Section/Themes";
import Platforms from "./MainApp/Section/Platforms";
import Username from "./MainApp/Section/Username";
import Home from "./MainApp/Home";
import PrivateRoute from "./Routes/PrivateRoute";
import Packages from "./MainApp/Section/Packages";

function AppWrapper() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={MainApp} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/username" element={<Username />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/themes" element={<Themes />} />
      <Route path="/platforms" element={<Platforms />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AppWrapper;
