import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import NavApp from "../components/NavApp";
import { checkTokenExpiration } from "../components/RequireAuth";
import Sidebar from "../components/Sidebar";
import ToastComponent from "../components/ToastComponent";
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

function BaseLayout({ user }) {
  const [pageTitle, setPageTitle] = useState("");
  const { response } = useSelector((state) => state.responseReducer);

  const [showToast, setShowToast] = useState(false);

  const location = useLocation();
  let currRoutes = [];
  currRoutes = location.pathname !== "/" ? location.pathname.split("/") : [];
  currRoutes.length > 0 && currRoutes.shift();
  const path = currRoutes[0];

  useEffect(() => {
    checkTokenExpiration();

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

  useEffect(() => {
    if (Object.keys(response).length > 0) {
      setShowToast(true);
    }
  }, [response]);

  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <div className="container-fluid">
      <div className="row" style={styles.row}>
        <div className="col-md-2" style={styles.col}>
          <Sidebar user={user} />
        </div>
        <div className="col-md-10">
          <NavApp pageTitle={pageTitle} user={user} />
          <div className="my-3 p-3 rounded" style={styles.content}>
            <Breadcrumbs pathname={currRoutes} />
            <Outlet />

            <ToastComponent
              response={response}
              show={showToast}
              handleClose={handleClose}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default BaseLayout;
