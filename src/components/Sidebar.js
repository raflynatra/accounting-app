import React from "react";
import { useState } from 'react';

import logo from "../assets/img/app-logo.svg";


function Sidebar() {

  return (<div>
    <nav class="navbar">
      <div className="container-fluid mt-3">
        <div className="navbar-brand mx-4 h1 flex" href="#">
          <img src={logo} alt="Logo" className="" />
          Accounting
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="container-fluid mt-5" style={{ textAlign: "center" }}>
        <h3 type="button" className="btn  mb-4 " style={{ color: "#4D3FA6" }}>Dashboard</h3>

        <button type="button" className="btn  mb-4  " style={{ color: "#4D3FA6" }}>Perkiraan</button>

        <button type="button" className="btn  mb-4  " style={{ color: "#4D3FA6" }}>Jurnal Umum</button>

        <button type="button" className="btn " style={{ color: "#4D3FA6" }}> Jurnal Besar</button>

      </div>
    </div>
  </div>
  );
}

export default Sidebar;