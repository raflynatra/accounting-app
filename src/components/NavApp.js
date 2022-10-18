import React from "react";
import logo from "../assets/img/app-logo.svg";

function NavApp() {
  return (
    <div className="container">
      <div className="wrapper ">
        <nav
          className="navbar navbar-expand-lg mt-3 fixed-top "
          style={{ backgroundColor: "#A0B4F2" }}
        >
          <div className="container-fluid ">
            <a className="navbar-brand h1 mx-4" href="#">
              <img src={logo} alt="Logo" className="" width="50" height="30" />
              Accounting
            </a>
          </div>
          <form className="d-flex mx-4" role="search">
            <button className="btn btn-danger btn-sm" type="submit">
              LOGOUT
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}

export default NavApp;
