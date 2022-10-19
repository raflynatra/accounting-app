import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/app-logo.svg";

function Sidebar() {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid mt-3">
          <div className="navbar-brand mx-4 h1 flex" href="#">
            <img src={logo} alt="Logo" className="" />
            Accounting
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row my-4 mx-4">
          <Link className="h6 side-hover text-center py-2" to="/">
            Dashboard
          </Link>
          <Link className="h6 side-hover text-center py-2" to="/perkiraan">
            Perkiraan
          </Link>
          <Link className="h6 side-hover text-center py-2" to="/jurnal-umum">
            Jurnal Umum
          </Link>
          <Link className="h6 side-hover text-center py-2" to="/jurnal-besar">
            {" "}
            Jurnal Besar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
