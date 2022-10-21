import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/app-logo.svg";

function Sidebar() {

  const [path, setPath] = useState("/")

  useEffect(() => {
    setPath(window.location.pathname)
    console.log(window.location.pathname)
  }, [window.location.pathname])


  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid mt-3">
          <div className="navbar-brand mx-4 h1 flex" href="#">
            <img src={logo} alt="Logo" style={{ margin: "0px 5px" }} />
            <span style={{ color: "#4d3fa6" }}>Accounting</span>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row my-4 mx-4">
          <Link className={path == "/" ? "h6 side-hover text-center py-2 active-sidebar" : "h6 side-hover text-center py-2"} to="/">
            Dashboard
          </Link>
          <Link className={path == "/perkiraan" ? "h6 side-hover text-center py-2 active-sidebar" : "h6 side-hover text-center py-2"} to="/perkiraan">
            Perkiraan
          </Link>
          <Link className={path == "/jurnal-umum" ? "h6 side-hover text-center py-2 active-sidebar" : "h6 side-hover text-center py-2"} to="/jurnal-umum">
            Jurnal Umum
          </Link>
          <Link className={path == "/jurnal-besar" ? "h6 side-hover text-center py-2 active-sidebar" : "h6 side-hover text-center py-2"} to="/jurnal-besar">
            {" "}
            Jurnal Besar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
