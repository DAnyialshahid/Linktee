import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login_via_storage, fetchThemes, selectTheme } from "../../features/auth/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../features/auth/authHelper.js";
import './theme.css';

const Themes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { themes: fetchedThemes, loading, error } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (!getFromLocalStorage("is_login")) {
      navigate("/signup");
    }
  }, [navigate]);

  useEffect(() => {
    dispatch(fetchThemes());
  }, [dispatch]);

  const handleSelectTheme = (themeId) => {
    dispatch(selectTheme(themeId))
      .then((response) => {
        toast.success("Theme selected successfully!");
        
        setTimeout(() => {
          navigate("/platforms");
        }, 2000);
      })
      .catch((error) => {
        toast.error(`Error selecting theme: ${error.message}`);
      });
  };

  const parseDesc = (desc) => {
    try {
      return JSON.parse(desc);
    } catch (error) {
      console.error("Error parsing desc:", error);
      return null;
    }
  };

  const renderCategories = (categories) => {
    const uniqueCategories = [...new Set(categories.map(category => category.name))];
    return uniqueCategories.map((category, index) => (
      <span key={index} className="badge bg-secondary me-1">{category}</span>
    ));
  };

  return (
    <section className="themes-section">
      <div className="container">  
        <h2 className="text-center mb-4 display-4 text-white font-weight-bold">Select Your Theme</h2>

        <div className="row justify-content-center">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            fetchedThemes.map((theme) => {
              const parsedDesc = parseDesc(theme.desc);
              if (!parsedDesc) return null; // Skip rendering if desc parsing fails
              return (
                <div key={theme.id} className="col-md-3">
                  <div className="theme-card">
                    <img src={theme.image_url} className="card-img-top" alt={theme.name} />
                    <div className="theme-details">
                      <h5 className="theme-title">{theme.name}</h5>
                      <p className="theme-description">{parsedDesc.short_desc}</p>
                      <div className="mb-2">{renderCategories(theme.categories)}</div>
                      <ul className="list-group list-group-flush">
                        {parsedDesc.bullets.map((bullet, index) => (
                          <li key={index} className="list-group-item">{bullet}</li>
                        ))}
                      </ul>
                      <button 
                        className="btn btn-primary mt-3" 
                        onClick={() => handleSelectTheme(theme.id)}
                      >
                        Select Theme
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Themes;
