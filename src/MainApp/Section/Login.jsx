
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login_via_storage,
  loginRequest
} from "./../../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../features/auth/authHelper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

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
  
  const responseFacebook = (response) => {
    console.log(response);
  }

  const isAuthenticated = useSelector((state) => state.auth.is_login);
  useEffect(() => {
    if (getFromLocalStorage("is_login")) {
      dispatch(
        login_via_storage({
          is_login: true,
          user_details: getFromLocalStorage("user"),
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <style>
        {`
          body {
            background: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Poppins', sans-serif;
            margin: 0;
          }

          .login-container {
            background: white;
            border-radius: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            display: flex;
            width: 900px;
            max-width: 100%;
          }

          .login-form {
            padding: 2rem;
            flex: 1;
          }

          .login-image {
            flex: 1;
            background: url('https://source.unsplash.com/random/800x800') no-repeat center center;
            background-size: cover;
          }

          .card-title {
            font-size: 2rem;
            font-weight: bold;
            color: #5151e5;
          }

          .btn-primary {
            background-color: #5151e5;
            border: none;
          }

          .btn-primary:hover {
            background-color: #3e3eb8;
          }

          .btn-google, .btn-facebook {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            font-weight: 500;
          }

          .btn-google {
            background-color: #de5246;
            color: white;
          }

          .btn-google:hover {
            background-color: #c2433a;
          }

          .btn-facebook {
            background-color: #4267B2;
            color: white;
          }

          .btn-facebook:hover {
            background-color: #365899;
          }
        `}
      </style>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="login-container">
          <div className="login-form">
            <h1 className="card-title text-center mb-4">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  placeholder="Enter your username"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
              <div className="text-center mb-3">or</div>
              <GoogleLogin
                onSuccess={credentialResponse => {
                  
                  dispatch(loginRequest({ username: 'avat', password: 'avatpass' }));
                  // dispatch(loginRequest({ clientId: credentialResponse.clientId }));
                  console.log(credentialResponse.clientId);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />;
              {/* <FacebookLogin
              appId="1088597931155576"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook} /> */}
            </form>
          </div>
          <div className="login-image"></div>
        </div>
      </div>
    </>
  );
};

export default App;
