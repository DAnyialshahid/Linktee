import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateUsername, selectUsername } from "../../features/auth/authSlice.js";
import "./signup.css"; 
import { Link, useNavigate } from "react-router-dom";

const Username = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { usernameValidation } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [usernameMessage, setUsernameMessage] = useState("");
  const [usernameAvailable, setUsernameAvailable] = useState(true);

  useEffect(() => {
    // Check username availability when the length of username is greater than 5 characters
    if (username.length > 5) {
      dispatch(validateUsername(username))
        .then((response) => {
          if (response.payload.success) {
            setUsernameAvailable(true);
            setUsernameError("");
            setUsernameMessage(response.payload.message);
          } else {
            setUsernameMessage("");
            setUsernameAvailable(false);
            setUsernameError(response.payload.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [username, dispatch]);

  const handleCreateUsername = (event) => {
    event.preventDefault();
    if (username.length < 5) {
      setUsernameError("Username must be at least 5 characters long");
    } else if (!usernameAvailable) {
      setUsernameError(usernameError);
    } else {
      setUsernameError("");
      // Dispatch the validateUsername action creator to call the API
      dispatch(selectUsername(username))
        .then((response) => {
          if (response.payload.success) {
            toast.success("Username is available! Proceed to next step...");
            setTimeout(() => {
              navigate("/packages");
            }, 2000);
          } else {
            toast.error("Username is not available. Please choose a different one.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("An error occurred while creating the username.");
        });
    }
  };

  return (
    <section className="signup-section">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 signup-left">
            <div className="logo">
            <svg
                height="80%"
                viewBox="0 0 80 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logo-svg"
              >
                <title>Linktree Logo</title>
                <desc>Linktree Logo Symbol and Word Mark</desc>
                <path
                  d="M0 1.72687H2.25964V13.6313H8.50582V15.7244H0V1.72687ZM10.7287 1.72687C10.9121 1.72444 11.0941 1.75816 11.2644 1.82609C11.4348 1.89402 11.59 1.99484 11.7214 2.12278C11.8528 2.25073 11.9576 2.4033 12.03 2.57178C12.1024 2.74026 12.1409 2.92135 12.1433 3.1047C12.1433 3.47987 11.9943 3.83967 11.729 4.10496C11.4637 4.37024 11.1039 4.51928 10.7287 4.51928C10.3536 4.51928 9.99375 4.37024 9.72847 4.10496C9.46318 3.83967 9.31415 3.47987 9.31415 3.1047C9.31491 2.92087 9.3523 2.73903 9.42412 2.56981C9.49594 2.40058 9.60076 2.24736 9.73245 2.11909C9.86414 1.99082 10.0201 1.89008 10.1911 1.82273C10.3622 1.75539 10.5449 1.7228 10.7287 1.72687ZM9.62645 5.63991H11.7942V15.7244H9.62645V5.63991ZM13.0618 5.63991H15.2296V7.03612C15.8714 5.97059 16.9737 5.36435 18.425 5.36435C20.7765 5.36435 22.2462 7.20146 22.2462 10.1225V15.7244H20.0784V10.3062C20.0784 8.41395 19.2517 7.34843 17.7587 7.34843C16.1249 7.34843 15.2247 8.46906 15.2247 10.4899V15.7244H13.057L13.0618 5.63991ZM23.3852 1.72687H25.553V10.5817L29.5946 5.63991H32.3135L27.9963 10.692L32.3135 15.7244H29.5946L25.553 10.8022V15.7244H23.3852V1.72687ZM33.1586 3.07408H35.3631V5.64604H37.9351V7.44641H35.3631V12.6442C35.3631 13.3068 35.7673 13.7109 36.3919 13.7109H37.8445V15.7305H36.098C34.2058 15.7305 33.1586 14.6099 33.1586 12.6271V3.07408ZM38.8904 5.64604H41.0582V6.89527C41.5909 5.93998 42.4911 5.37047 43.5934 5.37047C43.8478 5.35888 44.1024 5.38993 44.3466 5.46233V7.48315C44.0813 7.42486 43.8097 7.40017 43.5383 7.40966C41.94 7.40966 41.0582 8.75688 41.0582 11.0655V15.7305H38.8904V5.64604ZM49.4158 5.37047C51.804 5.37047 54.3944 6.82179 54.3944 10.9185V11.2125H46.6234C46.79 13.0116 47.8359 14.0037 49.5811 14.0037C50.8304 14.0037 51.8959 13.3239 52.1347 12.3882H54.3393C54.1188 14.4078 52.0245 16.0061 49.5811 16.0061C46.4581 16.0061 44.4936 13.9669 44.4936 10.6797C44.4936 7.75259 46.3858 5.36435 49.4158 5.36435V5.37047ZM52.0796 9.41211C51.7673 8.16288 50.7936 7.37292 49.4158 7.37292C48.0931 7.37292 47.1574 8.18125 46.79 9.41211H52.0796ZM60.2731 5.37047C62.6614 5.37047 65.2517 6.82179 65.2517 10.9185V11.2125H57.4807C57.646 13.0116 58.6932 14.0037 60.4385 14.0037C61.6877 14.0037 62.7532 13.3239 62.992 12.3882H65.1966C64.9761 14.4078 62.8818 16.0061 60.4385 16.0061C57.3154 16.0061 55.3497 13.9669 55.3497 10.6797C55.3497 7.75259 57.2419 5.36435 60.2731 5.36435V5.37047ZM62.9369 9.41211C62.6246 8.16288 61.651 7.37292 60.2731 7.37292C58.9504 7.37292 58.0135 8.18125 57.646 9.41211H62.9369Z"
                  fill="#000000"
                ></path>
                <path
                  d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z"
                  fill="#43E660"
                ></path>
              </svg>
            </div>
            <div className="text-center mt-5">
              <h1 className="text-black text-bold">Create Username</h1>
              <p className="text-black">Choose a unique username!</p>
            </div>

            <form onSubmit={handleCreateUsername} className="mt-4">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                
                {usernameError && <p className="text-danger">{usernameError}</p>}
                {username.length > 5 && (
                  <div>
                    {usernameValidation.loading && <p>Checking username...</p>}
                    {usernameMessage && <p className="text-success">{usernameMessage}</p>}
                  </div>
                )}

              </div>
              <div className="mb-3">
                <button type="submit" className="btn w-100 btn-primary">
                  Create Username
                </button>
              </div>
            </form>

          </div>
          <div className="col-12 col-md-5 signup-right">
            <img
              src="https://cyrenmedia.com/wp-content/uploads/2024/01/Screenshot-2024-01-12-094314.png"
              className="img-fluid"
              alt="Signup visual"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Username;
