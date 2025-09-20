import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SplashPage from '../pages/SplashPage/SplashPage';
// 로그인
import LoginPage from '../pages/LoginPage/LoginPage';
// 홈
import HomePage from '../pages/HomePage/HomePage';
import AnotherConditionPage from '../pages/HomePage/AnotherConditionPage/AnotherConditionPage';
// 지도
import KakaoMap from '../pages/MapPage/MapPage';
import PropertyListPage from '../pages/MapPage/PropertyListPage';
// 마이페이지
import MyPage from '../pages/MyPage/MyPage';
import Profile from '../pages/MyPage/Profile';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/home/another-condition-page"
          element={<AnotherConditionPage />}
        />
        <Route path="home/map" element={<KakaoMap />} />
        <Route path="home/map/property-list" element={<PropertyListPage />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/my-page/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
