import React from "react";
import { useNavigate } from "react-router-dom";
import { color } from "../utils/Helper";
const styles = {
  button: {
    backgroundColor: color.primary,
    color: color.white,
    textDecoration: "none",
    "&:hover": {
      backgroundColor: color.secondary,
    },
  },
};

function NavApp({ pageTitle, user }) {
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg mt-2 p-3 rounded d-flex justify-content-between"
        style={{ backgroundColor: "#A0B4F2", minHeight: "40px" }}
      >
        <h1 style={{ color: color.primary }}>{pageTitle}</h1>
        <div id="navbarNavDarkDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <span
                className="h5 dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ cursor: "pointer", color: color.primary }}
              >
                Hello, {user.username}!
              </span>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <span
                    style={{ cursor: "pointer" }}
                    className="dropdown-item"
                    onClick={() => {
                      localStorage.removeItem("token");
                      navigate("/login");
                    }}
                  >
                    Logout
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavApp;
