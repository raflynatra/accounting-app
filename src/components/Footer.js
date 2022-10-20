import React from "react";
import logo from "../assets/img/app-logo.svg";
import { color } from "../utils/Helper";

function Footer() {
  return (
    <div className="">
      <nav
        className="mb-3 rounded d-flex align-items-center justify-content-between py-3 px-4"
        style={{
          backgroundColor: "#A0B4F2",
          color: color.primary,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "30px", margin: "0px 5px" }}
          />
          <span>Accounting</span>
        </div>
        <div>
          <span>&copy; 2022 AccountingJuaraCoding. All rights reserved.</span>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
