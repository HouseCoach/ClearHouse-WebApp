import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 로그인
import LoginPage from '../pages/LoginPage';
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
