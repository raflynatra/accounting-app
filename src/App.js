import { BrowserRouter, Route, Routes } from "react-router-dom";
import BaseLayout from "./pages/BaseLayout";
import DashboardPage from "./pages/DashboardPage";
import JurnalUmumPage from "./pages/JurnalUmumPage";
import PerkiraanPage from "./pages/PerkiraanPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/perkiraan" element={<PerkiraanPage />} />
          <Route path="/jurnal-umum" element={<JurnalUmumPage />} />
          <Route path="/jurnal-umum/create" element={<JurnalUmumPage />} />
          <Route path="/jurnal-umum/edit" element={<JurnalUmumPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
