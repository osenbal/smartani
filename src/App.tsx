import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './ui/layout/main.layout';
import HomePage from './ui/pages/Home/Home.page';
import LoginPage from './ui/pages/Auth/Login/Login.page';
import RegisterPage from './ui/pages/Auth/Register/Register.page';
import DetailLahanPage from './ui/pages/Lahan/DetailLahan/DetailLahan.page';
import TambahLahanPage from './ui/pages/Lahan/TambahLahan/TambahLahan.page';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />

            <Route path="/lahan/:lahanId" element={<DetailLahanPage />} />

            <Route path="/tambah-lahan" element={<TambahLahanPage />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
