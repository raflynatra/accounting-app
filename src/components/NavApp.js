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

function NavApp({ pageTitle }) {
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg mt-2 p-3 rounded d-flex justify-content-between"
        style={{ backgroundColor: "#A0B4F2", minHeight: "40px" }}
      >
        <h1 style={{ color: color.primary }}>{pageTitle}</h1>
        <button
          className="btn"
          type="submit"
          style={styles.button}
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </nav>
    </div>
  );
}

export default NavApp;
