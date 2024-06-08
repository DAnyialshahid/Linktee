
import "./home.css"
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  login_via_storage,
  loginRequest,
} from "../features/auth/authSlice.js";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../features/auth/authHelper.js";

const MainApp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
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
      <header>
        <div class="container">
          <div class="navbar navbar-expand-lg navbar-light bg-white">
            <a class="navbar-brand p-0 ps-lg-4" href="#">
              <img src="/images/iDevAffiliate-logo.webp" alt="" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Templates</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Marketplace</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Discover
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Lorem Ipsum</a></li>
                    <li><a class="dropdown-item" href="#">Marketplace</a></li>
                    <li><a class="dropdown-item" href="#">Social for iDev</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" tabindex="-1" >Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" tabindex="-1" >Learn</a>
                </li>
              </ul>
              <div class="d-flex justify-content-lg-center gap-2">
                <Link to="/login" className="btn grey_btn">Log in</Link>
                <Link to="/signup" className="btn black_btn green_bg rounded-pill started_btn">Get started for free</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section class="main_banner py-5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 col-12">
              <div class="banner_content">
                <h1>
                  Everything you are. In one, simple link in bio.
                </h1>
                <p class="desc">
                  Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
                </p>
                <div class="row align-items-center my-4">
                  <div class="col-lg-6 col-12 w-auto input-group">
                    <span class="input-group-text" id="basic-addon3">idev.com/</span>
                    <input type="text" class="form-control" id="basic-url" placeholder="yourname" aria-describedby="basic-addon3" />
                  </div>
                  <div class="col-lg-4 col-12 mt-lg-0 mt-4 text-lg-start text-center">
                    <button class="btn pink_btn rounded-pill" type="submit">Claim your iDev Gift</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="banner_images">
                <div class="image_one text-center">
                  <img src="/images/bg.webp" id="ex1-layer" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="second_banner py-5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 col-12">
              <div class="banner_images">
                <div class="image_one text-center">
                  <img src="/images/bg.webp" id="ex1-layer" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="section2_content">
                <h1>
                  Everything you are. In one, simple link in bio.
                </h1>
                <p class="desc">
                  Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
                </p>
                <div class="row align-items-center my-4">
                  <div class="col-lg-12 col-12">
                    <button class="btn purple_button rounded-pill" type="submit">Claim your iDev Gift</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="third_banner py-5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 col-12">
              <div class="section3_content">
                <h1>
                  Share your Linktree from your Instagram, TikTok, Twitter and other bios
                </h1>
                <p class="desc">
                  Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.
                </p>
                <div class="row align-items-center my-4">
                  <div class="col-lg-12 col-12">
                    <button class="btn purple_button rounded-pill" type="submit">Get started for free</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="banner_images">
                <div class="image_one text-center">
                  <img src="/images/bg.webp" id="ex1-layer" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="forth_banner py-5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 col-12">
              <div class="banner_images">
                <div class="image_one text-center">
                  <img src="/images/bg.webp" id="ex1-layer" class="img-fluid" />
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="section4_content">
                <h1>
                  Analyze your audience and keep your followers engaged
                </h1>
                <p class="desc">
                  Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
                </p>
                <div class="row align-items-center my-4">
                  <div class="col-lg-12 col-12">
                    <button class="btn purple_button rounded-pill" type="submit">Get started for free</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-lg-6 col-12">
            <div class="banner_images">
              <div class="image_one text-center">
                <img src="/images/bg.webp" id="ex1-layer" class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="section4_content">
              <h1>
                Analyze your audience and keep your followers engaged
              </h1>
              <p class="desc">
                Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
              </p>
              <div class="row align-items-center my-4">
                <div class="col-lg-12 col-12">
                  <button class="btn purple_button rounded-pill" type="submit">Get started for free</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <footer class="footer_banner py-5">
        <div class="container">
          <div class="footer_inner_wrapper">
            <div class="row">

              <div class="col-md-3">
                <div class="footer_link_widget">
                  <h3 class="footer_link_title">Company</h3>
                  <ul class="footer_links">
                    <li><a href="#">The Linktree Blog</a></li>
                    <li><a href="#">Engineering Blog</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">What's New</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Link in Bio</a></li>
                    <li><a href="#">Social Good</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3">
                <div class="footer_link_widget">
                  <h3 class="footer_link_title">Community</h3>
                  <ul class="footer_links">
                    <li><a href="#">Linktree for Enterprise</a></li>
                    <li><a href="#">2023 Creator Report</a></li>
                    <li><a href="#">2022 Creator Report</a></li>
                    <li><a href="#">Charities</a></li>
                    <li><a href="#">Creator Profile Directory</a></li>
                    <li><a href="#">Explore Templates</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3">
                <div class="footer_link_widget">
                  <h3 class="footer_link_title">Support</h3>
                  <ul class="footer_links">
                    <li><a href="#">Help Topics</a></li>
                    <li><a href="#">Getting Started</a></li>
                    <li><a href="#">Linktree Pro</a></li>
                    <li><a href="#">Features & How-Tos</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Report a Violation</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-md-3">
                <div class="footer_link_widget">
                  <h3 class="footer_link_title">Trust & Legal</h3>
                  <ul class="footer_links">
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Notice</a></li>
                    <li><a href="#">Cookie Notice</a></li>
                    <li><a href="#">Trust Center</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                  </ul>
                </div>
              </div>

            </div>
            <div class="row mt-4 align-items-center">
              <div class="col-md-4">
                <div class="d-flex  gap-2">
                  <Link to="/login" className="btn grey_btn">Log in</Link>
                  <Link to="/signup" className="btn black_btn green_bg rounded-pill started_btn">Get started for free</Link>

                </div>
              </div>
              <div class="col-md-8">
                <div class="d-flex justify-content-lg-end gap-2">
                  <a class="svg_btn" href="#">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 26" xml:space="preserve"><path d="m29.91 10.25-4.48 12.42h2l1.14-3.35h4.73l1.14 3.35h2.04L32 10.25H29.9zm-.85 7.52 1.85-5.45h.05l1.85 5.45h-3.75zm13.29-4.25a3.21 3.21 0 0 0-2.88 1.6h-.04v-1.5h-1.8v12.05h1.86v-4.49h.04a3.07 3.07 0 0 0 2.85 1.59c2.27 0 3.78-1.81 3.78-4.62s-1.51-4.63-3.81-4.63zm-.5 7.67c-1.41 0-2.37-1.22-2.37-3.05 0-1.8.96-3.03 2.38-3.03 1.44 0 2.39 1.2 2.39 3.03 0 1.86-.95 3.05-2.4 3.05zm10.46-7.67a3.2 3.2 0 0 0-2.88 1.6h-.03v-1.5h-1.8v12.05h1.85v-4.49h.05a3.07 3.07 0 0 0 2.85 1.59c2.27 0 3.78-1.81 3.78-4.62s-1.52-4.63-3.82-4.63zm-.49 7.67c-1.42 0-2.37-1.22-2.37-3.05 0-1.8.95-3.03 2.37-3.03 1.45 0 2.4 1.2 2.4 3.03 0 1.86-.95 3.05-2.4 3.05zm18.51-2.09c0 2.32-1.85 3.78-4.79 3.78-2.75 0-4.61-1.42-4.73-3.67h1.9c.14 1.23 1.33 2.04 2.97 2.04 1.56 0 2.7-.8 2.7-1.92 0-.96-.69-1.54-2.3-1.93l-1.6-.4c-2.29-.54-3.35-1.6-3.35-3.34 0-2.14 1.87-3.61 4.52-3.61 2.63 0 4.43 1.47 4.49 3.61h-1.88c-.11-1.24-1.14-1.99-2.63-1.99-1.5 0-2.52.76-2.52 1.86 0 .88.65 1.4 2.25 1.8l1.37.33c2.55.6 3.6 1.62 3.6 3.44zm4.02-5.48h1.72v1.47h-1.72v5c0 .77.34 1.13 1.1 1.13.2 0 .4-.02.61-.04v1.46c-.34.06-.68.09-1.03.08-1.83 0-2.55-.68-2.55-2.44v-5.19h-1.31v-1.47h1.31v-2.14h1.87v2.14zm7-.11c-2.6 0-4.28 1.79-4.28 4.64 0 2.85 1.66 4.64 4.29 4.64s4.3-1.79 4.3-4.64c0-2.85-1.68-4.64-4.3-4.64zm0 7.74c-1.5 0-2.4-1.14-2.4-3.1 0-1.95.9-3.11 2.4-3.11 1.52 0 2.41 1.15 2.41 3.1 0 1.97-.9 3.11-2.4 3.11zm9.83-7.73c.21 0 .43.03.64.07v1.74a2.56 2.56 0 0 0-.84-.11 1.87 1.87 0 0 0-1.93 2.08v5.37h-1.86v-9.05h1.77v1.54H89a2.16 2.16 0 0 1 2.18-1.64zm9.3 5.09v-.64c0-2.74-1.57-4.46-4.07-4.46-2.55 0-4.2 1.84-4.2 4.68 0 2.83 1.64 4.6 4.28 4.6 2.04 0 3.64-1.13 3.9-2.78h-1.77a2.04 2.04 0 0 1-2.1 1.28 2.37 2.37 0 0 1-2.43-2.57v-.11h6.4zm-6.2-2.18A2.3 2.3 0 0 1 96.4 15a2.2 2.2 0 0 1 2.09 1.42c.1.28.15.58.13.88H94.1c0-.3.06-.6.18-.88zM31.64 3.87A2.63 2.63 0 0 0 28.83.91h-2.16v5.96h2.16c1.77 0 2.8-1.1 2.8-3zM27.6 6.03V1.75h1.12a1.89 1.89 0 0 1 1.97 2.13 1.87 1.87 0 0 1-1.97 2.15H27.6zm8.78-3.05a2.13 2.13 0 0 0-3.7 1.64 2.14 2.14 0 0 0 2.13 2.34 2.12 2.12 0 0 0 2.12-2.34 2.14 2.14 0 0 0-.55-1.64zm-1.57 3.2c-.78 0-1.21-.57-1.21-1.56 0-.97.43-1.55 1.2-1.55.78 0 1.22.58 1.22 1.55 0 .98-.44 1.55-1.21 1.55zm4 .7-1.24-4.5h.9l.8 3.43h.07l.93-3.44h.85l.93 3.44h.07l.8-3.44h.9l-1.24 4.5h-.93l-.93-3.31h-.07l-.92 3.31h-.92zm8.98-2.7c0-.72-.31-1.08-.97-1.08a1.03 1.03 0 0 0-1.03.7c-.05.14-.06.3-.05.44v2.63h-.89v-4.5h.86v.72h.07a1.35 1.35 0 0 1 1.34-.8 1.48 1.48 0 0 1 1.5 1.02c.07.21.09.43.06.65v2.91h-.89V4.18zm3.2 2.7h-.9V.6h.9v6.26zm4.93-3.9a2.13 2.13 0 0 0-3.7 1.64 2.14 2.14 0 0 0 2.12 2.34 2.12 2.12 0 0 0 2.12-2.34 2.15 2.15 0 0 0-.54-1.64zm-1.58 3.2c-.77 0-1.2-.57-1.2-1.56 0-.97.43-1.55 1.2-1.55s1.21.58 1.21 1.55c0 .98-.44 1.55-1.2 1.55zm6.84.7V3.8c0-.95-.63-1.52-1.76-1.52-1.02 0-1.75.5-1.84 1.27h.86c.1-.31.44-.5.93-.5.61 0 .93.27.93.75v.39l-1.22.07c-1.07.06-1.68.53-1.68 1.34a1.36 1.36 0 0 0 1.5 1.35 1.52 1.52 0 0 0 1.36-.7h.07v.63h.85zm-.88-1.66a1.08 1.08 0 0 1-.38.74c-.1.09-.23.16-.37.2-.13.04-.28.05-.42.04-.48 0-.83-.24-.83-.64s.28-.6.9-.65l1.1-.07v.38zm3.92 1.73a1.57 1.57 0 0 0 1.41-.79h.07v.71h.85V.61h-.89V3.1h-.06a1.48 1.48 0 0 0-1.38-.8c-1.14 0-1.87.9-1.87 2.33 0 1.43.72 2.33 1.87 2.33zm.25-3.85c.74 0 1.21.59 1.21 1.53 0 .94-.46 1.52-1.21 1.52s-1.2-.57-1.2-1.53c0-.95.45-1.52 1.2-1.52zm7.88 3.86a2.12 2.12 0 0 0 2.13-2.34 2.14 2.14 0 0 0-2.99-2.15 2.13 2.13 0 0 0-1.26 2.15 2.14 2.14 0 0 0 2.12 2.34zm-1.2-2.34c0-.97.43-1.55 1.2-1.55.78 0 1.21.58 1.21 1.55 0 .98-.43 1.55-1.2 1.55-.78 0-1.21-.57-1.21-1.55zm6.05-1.45a1.05 1.05 0 0 0-.6.63c-.04.14-.06.3-.04.44v2.63h-.89v-4.5h.85v.72h.07a1.35 1.35 0 0 1 1.34-.8 1.48 1.48 0 0 1 1.51 1.02c.07.21.09.43.05.65v2.91h-.89V4.18c0-.72-.31-1.08-.97-1.08-.14 0-.3.02-.43.07zm6.43-.03h-.72v-.75h.72V1.25h.89v1.14h.97v.75h-.97v2.31c0 .48.2.68.63.68.12 0 .23 0 .34-.02v.74a2.8 2.8 0 0 1-.48.05c-.99 0-1.38-.35-1.38-1.22V3.14zm3.96 3.73h-.89V.61h.89V3.1h.07a1.38 1.38 0 0 1 1.37-.8 1.48 1.48 0 0 1 1.55 1.68v2.9h-.89V4.2c0-.72-.34-1.09-.96-1.09a1.03 1.03 0 0 0-.84.31 1.05 1.05 0 0 0-.3.83v2.63zm4.21-1.36a2.06 2.06 0 0 0 2.01 1.45 1.83 1.83 0 0 0 1.95-1.3h-.85a1.08 1.08 0 0 1-1.07.55 1.2 1.2 0 0 1-1.14-.8 1.19 1.19 0 0 1-.06-.5v-.04h3.18v-.31c0-1.42-.76-2.27-2.01-2.27a2.08 2.08 0 0 0-2.08 2.35c-.04.3-.02.59.07.87zm.92-1.75a1.16 1.16 0 0 1 1.52-.64 1.09 1.09 0 0 1 .67 1.09h-2.27c0-.16.02-.3.08-.45zM19.03 16.64a11.4 11.4 0 0 1-1.58 3.22c-.93 1.39-1.9 2.75-3.45 2.77-1.5.04-2-.88-3.73-.88-1.74 0-2.28.86-3.72.92-1.48.05-2.6-1.49-3.57-2.87C1.05 17-.45 11.87 1.57 8.4a5.53 5.53 0 0 1 4.65-2.84c1.47-.03 2.84 1 3.75 1 .89 0 2.58-1.23 4.33-1.04a5.28 5.28 0 0 1 4.15 2.24A5.15 5.15 0 0 0 16 12.07a4.97 4.97 0 0 0 3.03 4.57zm-7.37-11.8c-.59.27-1.22.41-1.87.4a4.83 4.83 0 0 1 1.19-3.49A5.16 5.16 0 0 1 14.32.02a5.07 5.07 0 0 1-1.16 3.63c-.4.5-.92.91-1.5 1.19z"></path></svg> */}

                  </a>
                  <a class="svg_btn" href="#">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116 29" xml:space="preserve"><linearGradient id="play-a" gradientUnits="userSpaceOnUse" x1="11.83" y1="27.05" x2="-4.96" y2="10.27" gradientTransform="matrix(1 0 0 -1 0 30)"><stop offset="0" style="stop-color:#00a0ff"></stop><stop offset="0.01" style="stop-color:#00a1ff"></stop><stop offset="0.26" style="stop-color:#00beff"></stop><stop offset="0.51" style="stop-color:#00d2ff"></stop><stop offset="0.76" style="stop-color:#00dfff"></stop><stop offset="1" style="stop-color:#00e3ff"></stop></linearGradient><path fill="url(#play-a)" d="M.5 1.8c-.3.3-.5.8-.5 1.4v22.1c0 .6.2 1.1.5 1.4l.1.1L13 14.4v-.2L.5 1.8z"></path><linearGradient id="play-b" gradientUnits="userSpaceOnUse" x1="23.86" y1="15.76" x2="-0.33" y2="15.76" gradientTransform="matrix(1 0 0 -1 0 30)"><stop offset="0" style="stop-color:#ffe000"></stop><stop offset="0.41" style="stop-color:#ffbd00"></stop><stop offset="0.78" style="stop-color:orange"></stop><stop offset="1" style="stop-color:#ff9c00"></stop></linearGradient><path fill="url(#play-b)" d="M17.1 18.5 13 14.4v-.2l4.1-4.1.1.1 4.9 2.8c1.4.8 1.4 2.1 0 2.9l-5 2.6z"></path><linearGradient id="play-c" gradientUnits="userSpaceOnUse" x1="14.85" y1="13.46" x2="-7.9" y2="-9.29" gradientTransform="matrix(1 0 0 -1 0 30)"><stop offset="0" style="stop-color:#ff3a44"></stop><stop offset="1" style="stop-color:#c31162"></stop></linearGradient><path fill="url(#play-c)" d="m17.1 18.5-4.2-4.2L.5 26.7c.5.5 1.2.5 2.1.1l14.5-8.3z"></path><linearGradient id="play-d" gradientUnits="userSpaceOnUse" x1="-2.67" y1="35.58" x2="7.49" y2="25.42" gradientTransform="matrix(1 0 0 -1 0 30)"><stop offset="0" style="stop-color:#32a071"></stop><stop offset="0.07" style="stop-color:#2da771"></stop><stop offset="0.48" style="stop-color:#15cf74"></stop><stop offset="0.8" style="stop-color:#06e775"></stop><stop offset="1" style="stop-color:#00f076"></stop></linearGradient><path fill="url(#play-d)" d="M17.1 10 2.5 1.7c-.8-.5-1.6-.4-2 .1L13 14.3l4.1-4.3z"></path><path opacity="0.2" d="M17.1 18.4 2.5 26.6c-.8.5-1.5.4-2 0l-.1.1.1.1c.5.4 1.2.5 2 0l14.6-8.4z"></path><path opacity="0.12" d="M.5 26.6c-.3-.4-.5-.8-.5-1.4v.1c0 .6.2 1.1.5 1.4v-.1zM22 15.5l-5 2.8.1.1 4.9-2.8c.7-.4 1-.9 1-1.4 0 .5-.3 1-1 1.3z"></path><path opacity="0.25" d="m2.5 1.9 19.5 11c.6.4 1 .8 1 1.3 0-.5-.3-1-1-1.4L2.5 1.7C1.1.9 0 1.6 0 3.2v.1c0-1.6 1.1-2.2 2.5-1.4z"></path><path d="m115.9 16.1-5.1 11.8h-1.9l1.9-4.2-3.3-7.6h2l2.2 5.4h.1l2.1-5.4h2zm-20-.6c0 2.4-2 3.9-4.1 3.9h-2.6v4.7h-1.9V11.6h4.5c2.1 0 4.1 1.5 4.1 3.9zm-1.8 0c0-1-.8-2.1-2.2-2.1h-2.7v4.3h2.7c1.4 0 2.2-1.2 2.2-2.2zm13.1 3.8v4.8h-1.8v-1h-.1c-.4.7-1.1 1.2-2.4 1.2-1.6 0-3.1-1.1-3.1-2.8 0-1.8 1.8-2.8 3.6-2.8.9 0 1.6.3 1.9.5v-.1c0-1-1-1.6-2-1.6-.7 0-1.4.2-1.7.9l-1.7-.7c.6-1.3 2-1.9 3.3-1.9 2.4.1 4 1.3 4 3.5zm-1.8 1.4c-.5-.2-.9-.4-1.7-.4-.9 0-2 .4-2 1.3 0 .8.9 1.1 1.5 1.1 1.1 0 2.1-.8 2.2-2zm-52.3-.6c0 2.4-1.9 4.3-4.3 4.3s-4.3-1.8-4.3-4.3 1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3zm-1.8 0c0-1.5-1.1-2.6-2.4-2.6-1.3 0-2.4 1-2.4 2.6 0 1.5 1.1 2.6 2.4 2.6s2.4-1.1 2.4-2.6zm-13.5-2.9V19h4.3c-.1 1-.5 1.8-1 2.3-.6.6-1.6 1.3-3.3 1.3-2.7 0-4.7-2.1-4.7-4.8a4.72 4.72 0 0 1 8-3.5l1.3-1.3a6.4 6.4 0 0 0-4.5-1.8c-3.6 0-6.7 3-6.7 6.6 0 3.6 3.1 6.6 6.7 6.6 2 0 3.4-.6 4.6-1.9 1.2-1.2 1.6-2.9 1.6-4.2 0-.4 0-.8-.1-1.1h-6.2zm24.6 2.9c0 2.4-1.9 4.3-4.3 4.3a4.2 4.2 0 0 1-4.3-4.3c0-2.5 1.9-4.3 4.3-4.3 2.4.1 4.3 1.9 4.3 4.3zm-1.8 0c0-1.5-1.1-2.6-2.4-2.6s-2.4 1-2.4 2.6c0 1.5 1.1 2.6 2.4 2.6s2.4-1.1 2.4-2.6zm22.7-1-5.7 2.4c.4.9 1.1 1.3 2.1 1.3s1.6-.5 2.1-1.2l1.5 1a4.18 4.18 0 0 1-7.7-2.4c0-2.5 1.8-4.3 4-4.3s3.3 1.8 3.6 2.7l.1.5zm-2.2-.7c-.2-.5-.8-.9-1.6-.9-1 0-2.3.8-2.2 2.5l3.8-1.6zM97 24.1h1.9V11.6H97v12.5zm-24.3 0h1.9V11.6h-1.9v12.5zm-3.1-8h1.8v7.6c0 3.1-1.9 4.4-4 4.4s-3.3-1.4-3.8-2.5l1.6-.7c.3.7 1 1.5 2.1 1.5 1.4 0 2.3-.9 2.3-2.5v-.6h-.1c-.4.5-1.2 1-2.2 1-2.1 0-4.1-1.9-4.1-4.2 0-2.4 1.9-4.3 4.1-4.3 1 0 1.8.5 2.2 1h.1v-.7zm.1 4c0-1.5-1-2.6-2.3-2.6-1.3 0-2.4 1.1-2.4 2.6s1.1 2.6 2.4 2.6c1.3 0 2.3-1.1 2.3-2.6zM59.3 6.4c-.6-.6-.9-1.3-.9-2.2s.3-1.6.9-2.2c.6-.7 1.3-1 2.2-1 .9 0 1.6.3 2.2.9.6.6.9 1.3.9 2.2 0 .9-.3 1.6-.9 2.2-.6.6-1.3.9-2.2.9-.9.1-1.6-.2-2.2-.8zm-.1-2.2c0 .7.2 1.3.7 1.7.4.5 1 .7 1.6.7s1.2-.2 1.6-.7c.4-.4.7-1 .7-1.7s-.2-1.3-.7-1.7c-.4-.5-1-.7-1.6-.7s-1.2.2-1.6.7c-.5.4-.7 1-.7 1.7zM34.5 7.3c.9 0 1.6-.3 2.2-.9.5-.5.7-1.2.7-2v-.5h-2.9v.7h2.2c0 .5-.2.9-.5 1.2-.4.4-1 .7-1.7.7-.6 0-1.2-.2-1.6-.7-.5-.4-.7-1-.7-1.7s.2-1.3.7-1.7c.5-.4 1-.7 1.6-.7.7 0 1.2.2 1.6.7l.6-.4c-.2-.3-.5-.5-.9-.7-.4-.2-.8-.3-1.3-.3-.9 0-1.6.3-2.2.9-.6.6-.9 1.3-.9 2.2 0 .9.3 1.6.9 2.2.6.7 1.4 1 2.2 1zm7.6-.9h-2.7V4.5h2.5v-.7h-2.5V1.9h2.7v-.7h-3.5v6h3.5v-.8zm3.3.8V1.9H47v-.7h-4.1v.7h1.7v5.3h.8zm5.4-6H50v6h.8v-6zm3.4 6V1.9h1.7v-.7h-4.1v.7h1.7v5.3h.7zm12.2-3.8V2.2l3.1 4.9h.8v-6h-.8v4.7l-2.9-4.7h-.9v6h.8V3.4z"></path></svg> */}
                  </a>

                  <a class="icon_btn" href="#">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xml:space="preserve"><path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm1.881 37.001h-3.762v-8.495h3.762v8.495zm8.707-13.622h-6.432l4.581 4.45-2.518 2.528L24 24.107l-6.22 6.25-2.518-2.518 4.581-4.45h-6.432v-3.59h6.402l-4.551-4.339 2.518-2.579 4.339 4.46V11h3.762v6.341l4.338-4.46 2.518 2.579-4.551 4.339h6.402v3.58z"></path></svg> */}
                  </a>
                  <a class="icon_btn" href="#">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xml:space="preserve"><path d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0zm12 16.368a9.663 9.663 0 0 1-2.827.794 5.042 5.042 0 0 0 2.165-2.794 9.687 9.687 0 0 1-3.127 1.225A4.867 4.867 0 0 0 28.617 14c-2.719 0-4.923 2.261-4.923 5.05 0 .395.044.778.127 1.149-4.094-.211-7.72-2.222-10.149-5.276a5.143 5.143 0 0 0-.666 2.538c0 1.751.87 3.298 2.19 4.203a4.82 4.82 0 0 1-2.23-.632v.065c0 2.446 1.696 4.487 3.95 4.951a4.84 4.84 0 0 1-2.224.087c.627 2.005 2.445 3.466 4.6 3.505a9.725 9.725 0 0 1-7.291 2.092A13.668 13.668 0 0 0 19.547 34c9.058 0 14.01-7.693 14.01-14.364 0-.217-.005-.436-.015-.652a10.144 10.144 0 0 0 2.455-2.612l.003-.004z"></path></svg> */}
                  </a>
                  <a class="icon_btn" href="#">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xml:space="preserve"><path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm11.165 21.719a10.473 10.473 0 0 1-6.122-1.969v8.953c0 4.474-3.638 8.109-8.102 8.109a8.084 8.084 0 0 1-5.923-2.586l-.008-.005a8.08 8.08 0 0 1-2.175-5.52c0-4.408 3.531-8.002 7.906-8.097v.008l.01-.014c.065 0 .125-.006.19-.006.366.001.732.027 1.094.077v4.499a3.694 3.694 0 0 0-1.094-.173 3.703 3.703 0 0 0-3.697 3.7 3.662 3.662 0 0 0 .701 2.16l-.01.006a3.712 3.712 0 0 0 3.002 1.54 3.702 3.702 0 0 0 3.691-3.564l.006-17.65h4.413a6.087 6.087 0 0 0 1.503 4.015 1.53 1.53 0 0 0-.053-.033c.016.011.03.023.046.033a6.121 6.121 0 0 0 3.334 1.975l.005.002c.41.089.838.137 1.283.137v4.403z"></path></svg> */}
                  </a>
                  <a class="icon_btn" href="#">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xml:space="preserve"><path d="M24 0c13.255 0 24 10.745 24 24S37.255 48 24 48 0 37.255 0 24 10.745 0 24 0zm0 12.539c-3.113 0-3.503.013-4.726.069-1.22.056-2.054.25-2.783.533a5.615 5.615 0 0 0-2.03 1.322 5.624 5.624 0 0 0-1.322 2.03c-.283.729-.478 1.563-.533 2.784-.055 1.222-.069 1.611-.069 4.725s.013 3.503.069 4.726c.056 1.22.25 2.054.533 2.783a5.615 5.615 0 0 0 1.322 2.03 5.626 5.626 0 0 0 2.03 1.322c.729.283 1.563.478 2.783.533 1.223.055 1.612.069 4.726.069 3.113 0 3.503-.013 4.726-.069 1.22-.056 2.054-.25 2.783-.533a5.615 5.615 0 0 0 2.03-1.322 5.626 5.626 0 0 0 1.322-2.03c.283-.729.478-1.563.533-2.783.055-1.223.069-1.612.069-4.726s-.013-3.503-.069-4.726c-.056-1.22-.25-2.054-.533-2.783a5.615 5.615 0 0 0-1.322-2.03 5.624 5.624 0 0 0-2.03-1.322c-.729-.283-1.563-.478-2.784-.533-1.222-.056-1.611-.069-4.725-.069zm-.001 15.288a3.831 3.831 0 0 1-2.705-1.12 3.823 3.823 0 0 1 0-5.41 3.823 3.823 0 0 1 5.409 0 3.825 3.825 0 0 1-2.704 6.53zm0-9.716a5.89 5.89 0 1 0 0 11.782 5.89 5.89 0 0 0 0-11.782zm7.606-.107a1.394 1.394 0 0 1-2.378.985 1.393 1.393 0 1 1 2.378-.985z"></path></svg> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default MainApp
