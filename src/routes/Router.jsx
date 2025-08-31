import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SplashPage from '../pages/SplashPage/SplashPage';
// 로그인
import LoginPage from '../pages/LoginPage/LoginPage';
// 홈
import HomePage from '../pages/HomePage/HomePage';
import MyPage from '../pages/MyPage/MyPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/my-page" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
