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

function NavApp() {
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg mt-2 p-3 rounded d-flex justify-content-end"
        style={{ backgroundColor: "#A0B4F2", minHeight: "40px" }}
      >
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
