import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlatforms, selectPlatform } from "../../features/auth/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import './platform.css';

const FormData = require('form-data');

const Platforms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { platforms: fetchedPlatforms, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchPlatforms());
  }, [dispatch]);

  const [selectedPlatform, setSelectedPlatform] = useState({});

  const handleInputChange = (e, platformId) => {
    const { value } = e.target;
    setSelectedPlatform((prevState) => {
      const updatedPlatform = { ...prevState };
      updatedPlatform[platformId] = value;
      return updatedPlatform;
    });
  };

  const handleNextClick = () => {
    const formData = new FormData();
    for (const [platformId, link] of Object.entries(selectedPlatform)) {
      if (link !== "") {
        formData.append(`platform[${platformId}][link]`, link);
      }
    }

    dispatch(selectPlatform(formData))
      .then((response) => {
        toast.success("Platform selected successfully!");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        toast.error(`Error selecting platform: ${error.message}`);
      });
  };

  return (
    <section className="platforms-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-white">Select Your Platforms</h2>
        <div className="row justify-content-center">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            fetchedPlatforms.slice(0, 4).map((platform) => (
              <div key={platform.id} className="col-md-8 mb-3">
                <div className="d-flex align-items-center shadow-sm p-3 bg-white rounded">
                  <img
                    src={platform.image_url}
                    alt={platform.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    className="me-3"
                  />
                  <input
                    type="text"
                    name={`platform_${platform.id}`}
                    placeholder={`Enter ${platform.name} URL`}
                    onChange={(e) => handleInputChange(e, platform.id)}
                    className="form-control"
                  />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 mb-3 text-center ">
            <button
              className="btn btn-primary w-100"
              onClick={handleNextClick}
              disabled={Object.keys(selectedPlatform).length !== fetchedPlatforms.slice(0, 4).length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Platforms;
