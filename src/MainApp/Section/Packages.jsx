import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackages, selectPackage } from "../../features/auth/authSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import './package.css'; // Make sure to create a CSS file for custom styles

const Packages = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { packages: fetchedPackages, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

  const renderBullets = (desc) => {
    try {
      const bullets = JSON.parse(desc).bullets;
      return bullets.map((bullet, index) => (
        <li key={index} className="list-group-item">
          {bullet}
        </li>
      ));
    } catch (error) {
      console.error("Error parsing bullets:", error);
      return null;
    }
  };

  const handleSelectPackage = (packageId, period) => {
    dispatch(selectPackage({ packageId, period }))
      .then((response) => {
        toast.success("Package selected successfully!");
        setTimeout(() => {
          navigate("/themes");
        }, 2000);
      })
      .catch((error) => {
        toast.error(`Error selecting package: ${error.message}`);
      });
  };

  return (
    <section className="pricing-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Choose Your Plan</h2>
        <div className="row justify-content-center">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : (
            fetchedPackages.map((pkg) => (
              <div key={pkg.id} className="col-lg-3 col-md-6 mb-4">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="mb-3 text-center">
                    {pkg.name}
                    </div>
                    <h6 className="card-subtitle mb-2 text-center text-muted">
                      ${pkg.price}
                    </h6>
                    <p className="card-text text-center">{pkg.desc.short_desc}</p>
                    <ul className="list-group list-group-flush">
                      {renderBullets(pkg.desc)}
                    </ul>
                    <div className="d-grid mt-auto">
                      <button 
                        className="btn btn-primary btn-block" 
                        onClick={() => handleSelectPackage(pkg.id, 'monthly')}
                      >
                        Select Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Packages;
