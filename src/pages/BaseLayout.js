import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import NavApp from "../components/NavApp";
import Sidebar from "../components/Sidebar";

function BaseLayout() {
  const [pageTitle, setPageTitle] = useState("");
  const pathname = window.location.pathname.split("/");
  const path = pathname[1];

  useEffect(() => {
    if (path.includes("perkiraan")) {
      setPageTitle("Perkiraan");
    } else if (path.includes("jurnal")) {
      setPageTitle("Jurnal Umum");
    } else {
      setPageTitle("Dashboard");
    }
  }, [path]);

  return (
    <div>
      <div className="row" style={{ minHeight: "100vh" }}>
        <div className="col-md-2" style={{ backgroundColor: "salmon" }}>
          <Sidebar />
        </div>
        <div className="col-md-10">
          <NavApp />
          <h1>{pageTitle}</h1>
          <div
            className="my-3 p-3 rounded"
            style={{ backgroundColor: "#EFEFEF", minHeight: "540px" }}
          >
            {path !== "" ? <Breadcrumbs pathname={pathname} /> : <></>}
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default BaseLayout;
