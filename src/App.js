import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import DashboardPage from "./pages/DashboardPage";
import JurnalUmumPage from "./pages/JurnalUmumPage";
import LoginPage from "./pages/LoginPage";
import PerkiraanPage from "./pages/PerkiraanPage";
import JurnalUmumForm from "./components/JurnalUmum/JurnalUmumForm";
import PerkiraanForm from "./components/Perkiraan/PerkiraanForm";
import PerkiraanEdit from "./components/Perkiraan/PerkiraanEdit";
import BukuBesarPage from "./pages/BukuBesarPage";
import NeracaSaldoPage from "./pages/NeracaSaldoPage";
import LabaRugi from "./pages/LabaRugiPage";
import ArusKasPage from "./pages/ArusKasPage";
import MasterUserTable from "./components/MasterUser/MasterUserTable";
import MasterUserForm from "./components/MasterUser/MasterUserForm";
import MasterUserEdit from "./components/MasterUser/MasterUserEdit";
import "./assets/css/App.css";

const AccessLoginPageHandler = () => {
  const isAuthenticated = localStorage.getItem("token");

  return <>{isAuthenticated ? <Navigate to="/" /> : <LoginPage />}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<RequireAuth allowedRoles={["USER", "ADMIN"]} />}
        >
          <Route index element={<DashboardPage />} />
          <Route path="/perkiraan" element={<PerkiraanPage />} />
          <Route path="/jurnal-umum" element={<JurnalUmumPage />} />
          <Route path="/buku-besar" element={<BukuBesarPage />} />
          <Route path="/Laba-rugi" element={<LabaRugi />} />
          <Route path="/neraca-saldo" element={<NeracaSaldoPage />} />
          <Route path="/arus-kas" element={<ArusKasPage />} />
        </Route>

        <Route path="/" element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/jurnal-umum/create" element={<JurnalUmumForm />} />
          <Route
            path="/jurnal-umum/edit"
            element={<JurnalUmumForm isEdit={true} />}
          />
          <Route path="/perkiraan/create" element={<PerkiraanForm />} />
          <Route path="/perkiraan/edit/:id" element={<PerkiraanEdit />} />
          <Route path="/master-user" element={<MasterUserTable />} />
          <Route path="/master-user/create" element={<MasterUserForm />} />
          <Route path="/master-user/edit/:id" element={<MasterUserEdit />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<AccessLoginPageHandler />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
