import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import NavApp from "../components/NavApp";
import Sidebar from "../components/Sidebar";
import { color } from "../utils/Helper";

const styles = {
  row: {
    minHeight: "100vh",
  },
  title: {
    color: color.primary,
  },
  col: {
    backgroundColor: color.white,
  },
  content: {
    backgroundColor: color.tierary,
    minHeight: "760px",
  },
};

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
    <div className="container-fluid">
      <div className="row" style={styles.row}>
        <div className="col-md-2" style={styles.col}>
          <Sidebar />
        </div>
        <div className="col-md-10">
          <NavApp />
          <h1 style={styles.title}>{pageTitle}</h1>
          <div className="my-3 p-3 rounded" style={styles.content}>
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
