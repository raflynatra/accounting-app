import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
    minHeight: "580px",
  },
};

function BaseLayout() {
  const [pageTitle, setPageTitle] = useState("");
  let location = useLocation();
  let currRoutes = [];

  currRoutes = location.pathname !== "/" ? location.pathname.split("/") : [];
  if (currRoutes.length > 0) {
    currRoutes.shift();
  }

  const path = currRoutes[0];

  useEffect(() => {
    if (currRoutes.length > 0) {
      if (path.includes("perkiraan")) {
        setPageTitle("Perkiraan");
      } else if (path.includes("jurnal")) {
        setPageTitle("Jurnal Umum");
      } else if (path.includes("buku-besar")) {
        setPageTitle("Buku Besar");
      } else if (path.includes("Laba-rugi")) {
        setPageTitle("Laba Rugi");
      } else if (path.includes("neraca-saldo")) {
        setPageTitle("Neraca Saldo");
      }
    } else {
      setPageTitle("Dashboard");
    }
  }, [currRoutes.length, path]);

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
            <Breadcrumbs pathname={currRoutes} />
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default BaseLayout;
