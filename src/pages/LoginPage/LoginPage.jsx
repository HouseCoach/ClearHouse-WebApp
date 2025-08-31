import { Link } from 'react-router-dom';
import TopLayout from '../../components/layout/TopLayout';

import logo from '../../assets/logo.png';
import googleIcon from '../../assets/login/google-logo.png';
import kakaoIcon from '../../assets/login/kakao-logo.png';
import naverIcon from '../../assets/login/naver-logo.png';

const LOGIN = [
  {
    source: googleIcon,
    title: '구글',
    to: '/home',
  },
  {
    source: kakaoIcon,
    title: '카카오',
    to: '/',
  },
  {
    source: naverIcon,
    title: '네이버',
    to: '/',
  },
];
export default function LoginPage() {
  return (
    <TopLayout>
      <div className="flex flex-col items-center w-full h-[85%] justify-center gap-[40px]">
        <img src={logo} alt="logo" className="w-[150px] h-[145px]" />
        <div className="flex flex-col gap-[5px] items-center">
          {LOGIN.map((item) => (
            <Link
              className="flex justify-center items-center gap-[15px] w-[325px] h-[60px] border-[2px] shadow-md border-primary rounded-[16px]"
              to={item.to}
            >
              <img
                src={item.source}
                alt={item.title}
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-[#1A1A1A] text-[16px]">
                {item.title}로 로그인하기
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </TopLayout>
  );
}
