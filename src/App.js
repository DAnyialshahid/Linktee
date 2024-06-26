import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom"

import "./styles/global.scss"
import 'bootstrap/dist/js/bootstrap.bundle.min'

import AppWrapper from "./AppWrapper"
import { GoogleOAuthProvider } from '@react-oauth/google'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Router>
      <div>
        <ToastContainer />
        <GoogleOAuthProvider clientId="325447167009-qu6e4ebg820ld95ckks2i68hvnpvksk2.apps.googleusercontent.com">
          <AppWrapper />
        </GoogleOAuthProvider>
      </div>

    </Router >
  )
}

export default App
