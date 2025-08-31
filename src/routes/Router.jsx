import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SplashPage from '../pages/SplashPage/SplashPage';
// 로그인
import LoginPage from '../pages/LoginPage/LoginPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
