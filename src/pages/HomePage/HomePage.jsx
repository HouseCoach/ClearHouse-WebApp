import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

import Footer from '../../components/layout/Footer';

import logo from '../../assets/logo.png';
import billaIcon from '../../assets/Home/billa-icon.png';
import opiIcon from '../../assets/Home/opi-icon.png';
import aptIcon from '../../assets/Home/aprt-icon.png';
import juIcon from '../../assets/Home/ju-icon.png';
import searchIcon from '../../assets/Home/fin-icon.png';
import seeMoreBtn from '../../assets/Home/see-more.png';
import womanIcon from '../../assets/Home/women-icon.png';
import grandIcon from '../../assets/Home/n-icon.png';
import whIcon from '../../assets/Home/w-icon.png';
import tempImg from '../../assets/Home/temp.png';
import emptyHeart from '../../assets/Home/empty-heart.png';
import fullHeart from '../../assets/Home/full-heart.png';

const HOME_TYPE = [
  {
    title: '빌라',
    icon: billaIcon,
    to: '/billa',
  },
  {
    title: '오피스텔',
    icon: opiIcon,
    to: '/opi',
  },
  {
    title: '아파트',
    icon: aptIcon,
    to: '/apt',
  },
  {
    title: '주택',
    icon: juIcon,
    to: '/ju',
  },
];

const RECOMMEND_HOUSE = [
  {
    image: tempImg,
    money: '월세 2000/60',
    floor: 4,
    room: '24.5㎡',
    location: '마포구 연남동',
    id: 1,
  },
  {
    image: tempImg,
    money: '월세 2000/60',
    floor: 4,
    room: '24.5㎡',
    location: '마포구 연남동',
    id: 2,
  },
  {
    image: tempImg,
    money: '월세 2000/60',
    floor: 4,
    room: '24.5㎡',
    location: '마포구 연남동',
    id: 3,
  },
];

const SOCIAL_PEOPLE = [
  {
    title: '여성 안심',
    icon: womanIcon,
  },
  {
    title: '노인 중심',
    icon: grandIcon,
  },
  {
    title: '휠체어 이용',
    icon: whIcon,
  },
];

export default function HomePage() {
  const [favorites, setFavorites] = useState({});
  const toggleFav = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sliderRef = useRef(null);
  const drag = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    dragging: false,
  });
  const onMouseDown = (e) => {
    const el = sliderRef.current;
    if (!el) return;
    drag.current.isDown = true;
    drag.current.dragging = false;
    drag.current.startX = e.pageX - el.offsetLeft;
    drag.current.scrollLeft = el.scrollLeft;
  };

  const onMouseLeave = () => {
    drag.current.isDown = false;
  };

  const onMouseUp = () => {
    drag.current.isDown = false;
    // 클릭/드래그 구분 깔끔하게
    setTimeout(() => (drag.current.dragging = false), 0);
  };

  const onMouseMove = (e) => {
    const el = sliderRef.current;
    if (!el || !drag.current.isDown) return;
    e.preventDefault(); // 텍스트 선택 방지
    const x = e.pageX - el.offsetLeft;
    const walk = x - drag.current.startX;
    if (Math.abs(walk) > 5) drag.current.dragging = true; // 드래그로 판정
    el.scrollLeft = drag.current.scrollLeft - walk;
  };
  return (
    <div className="w-[375px] h-[721px] overflow-y-auto no-scrollbar">
      <div className="mt-[42px]">
        {/* logo */}
        <div className="flex gap-[5px] items-center pl-[24px] mb-[24px]">
          <img src={logo} alt="logo" className="w-[50px] h-[50px]" />
          <h1 className="text-[20px] text-primary font-bold">투명한 집터</h1>
        </div>
        {/* house */}
        <div className="mb-[24px]">
          <div className="grid grid-cols-2 px-[24px] gap-[12px]">
            {HOME_TYPE.map((item) => (
              <Link
                key={item.title}
                className="w-[157px] h-[96px] bg-white rounded-[5px] p-[12px] shadow-[0_2px_4px_0_rgba(18,41,164,0.05)] flex flex-col"
              >
                <p className="text-primary text-[16px] font-medium">
                  {item.title}
                </p>
                <img
                  src={item.icon}
                  className="w-[45px] h-[45px] self-end flex"
                  alt="icon"
                />
              </Link>
            ))}
            <Link
              to="/home/another-condition-page"
              className="text-[16px] text-primary font-medium w-[327px] h-[45px] rounded-[5px] shadow-[0_2px_4px_0_rgba(18,41,164,0.05)] bg-white flex items-center justify-center gap-[6px]"
            >
              다른 조건으로 검색하기
              <img
                src={searchIcon}
                className="w-[20px] h-[20px]"
                alt="searchIcon"
              />
            </Link>
          </div>
        </div>
        {/* 검증 매물 */}
        <div className="pl-[24px] mb-[16px]">
          <div className="flex justify-between mb-[12px] pr-[9px] ">
            <h1 className="text-primary font-semibold">검증 매물 추천</h1>
            <button className="flex items-center text-[12px] font-normal text-[#767676]">
              더보기
              <img
                src={seeMoreBtn}
                alt="seeMoreBtn"
                className="w-[10px] h-[10px]"
              />
            </button>
          </div>
          <div
            ref={sliderRef}
            className="flex flex-nowrap gap-[12px] h-[190px] no-scrollbar overflow-x-auto touch-pan-x select-none cursor-grab active:cursor-grabbing"
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            {RECOMMEND_HOUSE.map((item) => (
              <Link
                key={item.image}
                to="#"
                draggable={false}
                onDragStart={(e) => e.preventDefault()} // 기본 링크 드래그 방지
                onClick={(e) => {
                  if (drag.current.dragging) e.preventDefault(); // 드래그 중 클릭 차단
                }}
                className=" w-[140px] h-[180px] rounded-[12px] bg-white shrink-0 shadow-[8px_8px_8px_0_rgba(96,63,193,0.05)]"
              >
                <div className="relative">
                  <img src={item.image} alt="image" />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleFav(item.id);
                    }}
                    className="w-[29px] h-[29px] rounded-[50%] bg-[#ffffffbb] absolute bottom-2 right-2 flex justify-center items-center"
                  >
                    <img
                      src={favorites[item.id] ? fullHeart : emptyHeart}
                      alt="heart"
                      className="w-[16px] h-[16px]"
                    />
                  </button>
                </div>
                <div className="flex flex-col p-[12px] items-start">
                  <h1 className="text-[14px] mb-[6px]">{item.money}</h1>
                  <div className="text-[10px] text-[#666666] font-normal flex gap-[7px]">
                    <p>{item.floor}층</p>
                    <p>{item.room}</p>
                  </div>
                  <p className="text-[10px] text-[#666666] font-normal flex gap-[7px]">
                    {item.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* 맞춤 매물 */}
        <div className="pl-[24px] pr-[9px]">
          <div className="flex justify-between mb-[10px]">
            <h1 className="text-primary font-semibold">맞춤 매물 보기</h1>
            <button className="flex items-center text-[12px] font-normal text-[#767676]">
              더보기
              <img
                src={seeMoreBtn}
                alt="seeMoreBtn"
                className="w-[10px] h-[10px]"
              />
            </button>
          </div>
          <div className="flex gap-[12px]">
            {SOCIAL_PEOPLE.map((item) => (
              <button className="w-[108px] h-[45px] bg-white rounded-[5px] shadow-[0_2px_4px_0_rgba(18,41,164,0.05)] flex items-center justify-center gap-[3px]">
                <p className="text-primary text-[14px] font-normal">
                  {item.title}
                </p>
                <img src={item.icon} alt="icon" className="w-[15px] h-[17px]" />
              </button>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
