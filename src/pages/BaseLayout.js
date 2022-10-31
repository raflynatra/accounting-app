import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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
    height: "578px",
    backgroundColor: color.tierary,
    overflowY: "auto",
  },
};

function BaseLayout() {
  const [pageTitle, setPageTitle] = useState("");
  let currRoutes = [];
  const location = useLocation();
  const navigate = useNavigate();

  const checkTokenExpiration = () => {
    const decodeToken = jwtDecode(localStorage.getItem("token"));
    let currDate = new Date();

    if (decodeToken.exp * 1000 < currDate.getTime()) {
      alert("Token Expired!");
      navigate("/login");
      localStorage.removeItem("token");
    }
  };

  currRoutes = location.pathname !== "/" ? location.pathname.split("/") : [];
  if (currRoutes.length > 0) {
    currRoutes.shift();
  }

  const path = currRoutes[0];

  useEffect(() => {
    if (currRoutes.length > 0) {
      checkTokenExpiration();
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
      } else if (path.includes("arus-kas")) {
        setPageTitle("Arus Kas");
      } else if (path === "neraca") {
        setPageTitle("Neraca");
      } else if (path.includes("user")) {
        setPageTitle("Master User");
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
          <NavApp pageTitle={pageTitle} />
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
