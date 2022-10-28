import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import BaseLayout from "./pages/BaseLayout";
import DashboardPage from "./pages/DashboardPage";
import JurnalUmumPage from "./pages/JurnalUmumPage";
import LoginPage from "./pages/LoginPage";
import PerkiraanPage from "./pages/PerkiraanPage";
import "./assets/css/App.css";
import JurnalUmumForm from "./components/JurnalUmum/JurnalUmumForm";
import PerkiraanForm from "./components/Perkiraan/PerkiraanForm";
import PerkiraanEdit from "./components/Perkiraan/PerkiraanEdit";
import BukuBesarPage from "./pages/BukuBesarPage";
import NeracaSaldoPage from "./pages/NeracaSaldoPage";
import LabaRugi from "./pages/LabaRugiPage";
import ArusKasPage from "./pages/ArusKasPage";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import MasterUserTable from "./components/MasterUser/MasterUserTable";
import MasterUserForm from "./components/MasterUser/MasterUserForm";
import MasterUserEdit from "./components/MasterUser/MasterUserEdit";

const Protected = ({ userRole }) => {
  const isAuthenticated = localStorage.getItem("token");

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

  useEffect(() => {
    checkTokenExpiration();
  }, []);
  return (
    <>
      {isAuthenticated ? (
        <BaseLayout userRole={userRole} />
      ) : (
        <Navigate to="/login" replac />
      )}
    </>
  );
};

const AccessLoginPageHandler = () => {
  const isAuthenticated = localStorage.getItem("token");

  return <>{isAuthenticated ? <Navigate to="/" /> : <LoginPage />}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected />}>
          <Route path="/perkiraan/create" element={<PerkiraanForm />} />
          <Route path="/perkiraan/edit/:id" element={<PerkiraanEdit />} />
          <Route path="/jurnal-umum/create" element={<JurnalUmumForm />} />
          <Route path="/master-user" element={<MasterUserTable />} />
          <Route path="/master-user/create" element={<MasterUserForm />} />
          <Route path="/master-user/edit/:id" element={<MasterUserEdit />} />
          <Route
            path="/jurnal-umum/edit"
            element={<JurnalUmumForm isEdit={true} />}
          />
          <Route path="/jurnal-umum" element={<JurnalUmumPage />} />
          <Route index element={<DashboardPage />} />
          <Route path="/perkiraan" element={<PerkiraanPage />} />
          <Route path="/buku-besar" element={<BukuBesarPage />} />
          <Route path="/Laba-rugi" element={<LabaRugi />} />
          <Route path="/neraca-saldo" element={<NeracaSaldoPage />} />
          <Route path="/arus-kas" element={<ArusKasPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
        <Route path="/login" element={<AccessLoginPageHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
