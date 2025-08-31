import { Link } from 'react-router-dom';
import TopLayout from '../../components/layout/TopLayout';
import Footer from '../../components/layout/Footer';
import ringIcon from '../../assets/layout/ring.png';

import userIcon from '../../assets/MyPage/user.png';
import heartIcon from '../../assets/MyPage/heart.png';
import chatIcon from '../../assets/MyPage/chat.png';
import reviewIcon from '../../assets/MyPage/review.png';
import goIcon from '../../assets/MyPage/go.png';
const MAIN_LINK = [
  {
    title: '찜한 방',
    icon: heartIcon,
    to: '/my-page/liked-home',
  },
  {
    title: '문의한 방',
    icon: chatIcon,
    to: '/my-page/chatting-home',
  },
  {
    title: '내가 쓴 리뷰',
    icon: reviewIcon,
    to: '/my-page/my-review',
  },
];
const ANOTHER_LINK = [
  {
    title: '알림 설정',
    to: '',
  },
  {
    title: '중개인 가입 신청하기',
    to: '',
  },
  {
    title: '허위 매물 신고',
    to: '',
  },
];
export default function MyPage() {
  return (
    <TopLayout title="마이페이지" icon={ringIcon}>
      {/* user profile */}
      <div className="mb-[58px] flex justify-center">
        <Link to="profile" className="flex flex-col gap-[9px]">
          <img src={userIcon} alt="userIcon" className="w-[50px] h-[50px]" />
          <h1 className="text-[16px] text-gray-10">현사은</h1>
        </Link>
      </div>
      {/* main */}
      <div className="h-[101px] mb-[35px] border-t-[2px] border-b-[2px] border-gray-2 flex px-[68px] justify-between py-[20px]">
        {MAIN_LINK.map((item, idx) => (
          <Link key={idx} className="flex flex-col gap-[11px] items-center">
            <img src={item.icon} alt="icon" className="w-[30px] h-[30px]" />
            <h1 className="text-[10px] text-gray-10">{item.title}</h1>
          </Link>
        ))}
      </div>
      {/* another */}
      <div className="px-[44px] flex flex-col gap-[12px]">
        {ANOTHER_LINK.map((item, idx) => (
          <Link key={idx} className="w-[287px h-[18px] flex justify-between">
            <h1 className="text-[14px] text-gray-10">{item.title}</h1>
            <img
              src={goIcon}
              alt="goIcon"
              className="w-[14px] h-[14px] font-light"
            />
          </Link>
        ))}
      </div>
      <Footer />
    </TopLayout>
  );
}
