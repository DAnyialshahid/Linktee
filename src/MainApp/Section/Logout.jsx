import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./../../features/auth/authSlice.js";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      await dispatch(logout());
      navigate("/");
    };
  
    handleLogout();
  }, [dispatch, navigate]);
  
  return (
    "You are Logged out"
  );
};

export default Logout;
