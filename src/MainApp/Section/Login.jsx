import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  login_via_storage,
  loginRequest,
} from "./../../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../features/auth/authHelper.js";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(loginRequest({ username: email, password })).then(() => {
      navigate("/");
    });
  };

  // const dispatch = useDispatch();
  // const navigate = useNavigate(); // Add this line
  const isAuthenticated = useSelector((state) => state.auth.is_login);
  useEffect(() => {
    if (getFromLocalStorage("is_login")) {
      console.log(
        "ss",
        login_via_storage({
          is_login: true,
          user_details: getFromLocalStorage("user"),
        })
      );
      dispatch(
        login_via_storage({
          is_login: true,
          user_details: getFromLocalStorage("user"),
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Login area</h1>
      <form
        onSubmit={handleLogin}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <label>
          username:
          <input
            type="text"
            value={email}
            placeholder="avat"
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "10px", padding: "8px" }}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ marginBottom: "20px", padding: "8px" }}
            required
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default App;
