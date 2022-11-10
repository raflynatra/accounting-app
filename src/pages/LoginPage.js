import React, { useEffect, useState } from "react";
import loginIllu from "../assets/img/logo-illu.jpg";
import logo from "../assets/img/app-logo.svg";
import { color } from "../utils/Helper";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/actions/UserAction";

const styles = {
  container: {
    backgroundColor: color.tierary,
    height: "100vh",
  },
  row: {
    backgroundColor: color.white,
    width: "90vw",
    height: "90vh",
    boxSizing: "border-box",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "10px",
    boxShadow: "5px 5px 20px gray",
  },
  formCol: {
    backgroundColor: color.secondary,
    minHeight: "100%",
    borderRadius: "0 10px 10px 0",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    backgroundColor: color.primary,
    color: color.white,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: color.secondary,
    },
  },
};

function LoginPage() {
  const dispatch = useDispatch();
  const { authResponse } = useSelector((state) => state.responseReducer);
  const [isError, setIsError] = useState(false);
  const token = localStorage.getItem("token");

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (Object.keys(authResponse).length > 0) {
      setIsError(true);
    }
  }, [authResponse, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { username, password };
    const config = {
      headers: {
        "Access-Control-Allow-Origin": true,
        "Content-Type": "application/json",
      },
    };

    dispatch(loginUser(payload, config, navigate, from));
  };

  return (
    <div style={styles.container}>
      <div className="container">
        <div className="row" style={styles.row}>
          <div className="col-md-8">
            <img src={loginIllu} alt="login-illu" style={{ width: "100%" }} />
          </div>
          <div className="col-md-4" style={styles.formCol}>
            <div className="mx-4 text-center">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ margin: "0px 5px", width: "75px" }}
                />
                <span className="h2" style={{ color: "#4d3fa6" }}>
                  AccountJuco
                </span>
              </div>
              <p
                className="h6"
                style={{ color: color.primary, marginTop: "5px" }}
              >
                Make bookkeeping easy for your business!
              </p>
            </div>
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email here"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password here"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn" style={styles.button}>
                  Submit
                </button>
              </div>
            </form>
            <hr style={{ marginTop: "30px" }} />
            {isError && (
              <span
                className={`mt-0 text-center text-${authResponse.variant} fw-semibold`}
              >
                {authResponse.statusMessage}
              </span>
            )}
            <span className="mt-2 text-center">
              Made with &#128156; by Grup 3 MERN Juara Coding
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
