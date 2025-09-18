import { Link } from 'react-router-dom';
import TopLayout from '../../components/layout/TopLayout';
import userIcon from '../../assets/MyPage/user.png';
import pencilIcon from '../../assets/MyPage/pencil.png';
import kakaoIcon from '../../assets/login/kakao-logo.png';

export default function Profile() {
  return (
    <TopLayout title="나의 정보 설정">
      <div className="flex flex-col items-center h-full">
        <div className="mt-[50px] mb-[43px] relative">
          <img src={userIcon} alt="userIcon" className="w-[100px] h-[100px]" />
          <img
            src={pencilIcon}
            alt="pencilIcon"
            className="w-[24px] h-[24px] absolute bottom-2 right-0"
          />
        </div>
        <div className="flex justify-between items-center w-full px-[40px] mb-[42px]">
          <p className="text-[14px] text-gray-10 font-normal">
            연결된 소셜 계정
          </p>
          <p className="flex gap-[8px] items-center">
            <p className="text-[12px] text-[#7D7D7D]">tkdms0303@kakao.com</p>
            <img
              src={kakaoIcon}
              alt="kakaoIcon"
              className="w-[24px] h-[24px]"
            />
          </p>
        </div>
        <form action="" className="flex flex-col gap-[25px] mb-[47px]">
          <div className="relative">
            <input
              className="w-[327px] h-[60px] bg-blue-4 rounded-[16px] p-[20px] text-[14px] text-gray-10 outline-none border-none relative"
              placeholder="현사은"
              disabled={true}
            ></input>
          </div>
          <div className="relative">
            <input
              className="w-[327px] h-[60px] bg-blue-4 rounded-[16px] p-[20px] text-[14px] text-gray-10 outline-none border-none relative"
              placeholder="닉네임을 입력해주세요"
            ></input>
            <button className="absolute top-[16px] right-[15px]  w-[61px] h-[27px] bg-white border-primary border-[1px] px-[10px] py-[4px] text-primary text-[10px] rounded-[9px]">
              중복확인
            </button>
          </div>
          <div className="relative">
            <input
              className="w-[327px] h-[60px] bg-blue-4 rounded-[16px] p-[20px] text-[14px] text-gray-10 outline-none border-none relative"
              placeholder="전화번호를 입력해주세요"
            ></input>
          </div>
          <div className="relative">
            <input
              className="w-[327px] h-[60px] bg-blue-4 rounded-[16px] p-[20px] text-[14px] text-gray-10 outline-none border-none relative"
              placeholder="이메일을 입력해주세요"
            ></input>
            <button className="absolute top-[16px] right-[15px]  w-[61px] h-[27px] bg-white border-primary border-[1px] px-[10px] py-[4px] text-primary text-[10px] rounded-[9px]">
              중복확인
            </button>
          </div>
        </form>
        <div className="flex gap-[9px] mx-[24px]">
          <Link className="bg-blue-4 w-[159px] h-[60px] rounded-[16px] text-[18px]  text-gray-8 font-medium flex justify-center items-center">
            로그아웃
          </Link>
          <Link
            className="bg-primary w-[159px] h-[60px] rounded-[16px] text-white text-[18px] font-medium flex justify-center items-center"
            to="/my-page"
          >
            입력완료
          </Link>
        </div>
      </div>
    </TopLayout>
  );
}
