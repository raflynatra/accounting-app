import React from "react";
import logo from "../assets/img/app-logo.svg";

function NavApp() {
  return (
    <div className="">
      <nav
        className="navbar navbar-expand-lg mt-2 p-3 rounded"
        style={{ backgroundColor: "#A0B4F2" }}
      >
        <div className="container-fluid ">
        </div>
        <button className="btn btn-danger btn-sm" type="submit">
          LOGOUT
        </button>
      </nav>
    </div>
  );
}


export default NavApp;
