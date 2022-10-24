import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./pages/BaseLayout";
import DashboardPage from "./pages/DashboardPage";
import JurnalUmumPage from "./pages/JurnalUmumPage";
// import LoginPage from "./pages/LoginPage";
import PerkiraanPage from "./pages/PerkiraanPage";
import "./assets/css/App.css";
import JurnalUmumForm from "./components/JurnalUmum/JurnalUmumForm";
import PerkiraanForm from "./components/Perkiraan/PerkiraanForm";
import PerkiraanEdit from "./components/Perkiraan/PerkiraanEdit";
import BukuBesarPage from "./pages/BukuBesarPage";

function App() {
  return (
    // <LoginPage />
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/perkiraan" element={<PerkiraanPage />} />
          <Route path="/perkiraan/create" element={<PerkiraanForm />} />
          <Route path="/perkiraan/edit/:id" element={<PerkiraanEdit />} />

          <Route path="/jurnal-umum" element={<JurnalUmumPage />} />
          <Route path="/jurnal-umum/create" element={<JurnalUmumForm />} />
          <Route
            path="/jurnal-umum/edit"
            element={<JurnalUmumForm isEdit={true} />}
          />

          <Route path="/buku-besar" element={<BukuBesarPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
