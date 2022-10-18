import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavApp from "../components/NavApp";
import Sidebar from "../components/Sidebar";

function BaseLayout() {
  return (
    <div>
      <div className="row" style={{ minHeight: "100vh" }}>
        <div className="col-md-2" style={{ backgroundColor: "salmon" }}>
          <Sidebar />
        </div>
        <div className="col-md-10">
          <NavApp />
          <h1>Page Title</h1>
          <div
            className="my-3 p-3 rounded"
            style={{ backgroundColor: "#EFEFEF" }}
          >
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default BaseLayout;
