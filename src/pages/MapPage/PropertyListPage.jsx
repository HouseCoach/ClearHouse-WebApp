import { useState, useRef } from 'react';

import TopLayout from '../../components/layout/TopLayout';
import Footer from '../../components/layout/Footer';
import resetIcon from '../../assets/Map/reset-icon.png';
import tempHomeImg from '../../assets/Map/temp-home-img.png';
// filter
import TransactionType from '../../components/MapCondition/TransactionType';
import Price from '../../components/MapCondition/Price';
import Area from '../../components/MapCondition/Area';
import Floor from '../../components/MapCondition/Floor';
import Bathroom from '../../components/MapCondition/Bathroom';
import Room from '../../components/MapCondition/Room';

import emptyHeart from '../../assets/Home/empty-heart.png';
import fullHeart from '../../assets/Home/full-heart.png';

const TEMP_HOME = [
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 1,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 2,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 3,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 4,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 5,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 6,
  },
  {
    image: tempHomeImg,
    propertyType: '월세',
    price: '2000/60',
    floor: 4,
    area: 24.5,
    location: '마포구 연남동',
    id: 7,
  },
];
const FILTER = [
  {
    title: '매물 타입',
  },
  {
    title: '거래유형',
  },
  {
    title: '가격',
  },
  {
    title: '평형',
  },
  {
    title: '층',
  },
  {
    title: '화장실 갯수',
  },
  {
    title: '방 갯수',
  },
];
const PRICE_DEFAULTS = {
  sale: [0, 500000],
  jeonse: [0, 100000],
  monthlyDeposit: [0, 30000],
  monthly: [0, 200],
  noSelDeposit: [0, 50],
  noSelMonthly: [0, 200],
};
export default function PropertyListPage() {
  const [txnType, setTxnType] = useState([]);
  const [price, setPrice] = useState({ ...PRICE_DEFAULTS }); // 가격
  const [area, setArea] = useState([0, 60]); // 평형
  const [floor, setFloor] = useState([]); // 층
  const [bathroom, setBathroom] = useState([]); // 화장실 갯수
  const [room, setRoom] = useState([]);
  const [filter, setFilter] = useState('');

  const isSelected = (title) => {
    switch (title) {
      case '매물 타입':
        return true;
      case '거래유형':
        return txnType.length > 0;
      case '가격': {
        if (txnType.length === 0) {
          return (
            price.noSelDeposit[0] !== PRICE_DEFAULTS.noSelDeposit[0] ||
            price.noSelDeposit[1] !== PRICE_DEFAULTS.noSelDeposit[1] ||
            price.noSelMonthly[0] !== PRICE_DEFAULTS.noSelMonthly[0] ||
            price.noSelMonthly[1] !== PRICE_DEFAULTS.noSelMonthly[1]
          );
        }
        if (txnType[0] === 'SALE') {
          return (
            price.sale[0] !== PRICE_DEFAULTS.sale[0] ||
            price.sale[1] !== PRICE_DEFAULTS.sale[1]
          );
        }
        if (txnType[0] === 'JEONSE') {
          return (
            price.jeonse[0] !== PRICE_DEFAULTS.jeonse[0] ||
            price.jeonse[1] !== PRICE_DEFAULTS.jeonse[1]
          );
        }
        // MONTHLY
        return (
          price.monthlyDeposit[0] !== PRICE_DEFAULTS.monthlyDeposit[0] ||
          price.monthlyDeposit[1] !== PRICE_DEFAULTS.monthlyDeposit[1] ||
          price.monthly[0] !== PRICE_DEFAULTS.monthly[0] ||
          price.monthly[1] !== PRICE_DEFAULTS.monthly[1]
        );
      }
      case '평형':
        return area[0] !== 0 || area[1] !== 60;
      case '층':
        return floor.length > 0;
      case '화장실 갯수':
        return bathroom.length > 0;
      case '방 갯수':
        return room.length > 0;
      default:
        return false;
    }
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
  const [favorites, setFavorites] = useState({});
  const toggleFav = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div>
      <TopLayout title="이 동네 매물 목록">
        <div className="relative h-[615px]">
          <div className="absolute">
            <div
              className="flex gap-[7px] absolute left-[24px] no-scrollbar  overflow-x-auto w-[351px] pb-[15px]"
              ref={sliderRef}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              onDragStart={(e) => e.preventDefault()}
            >
              {FILTER.map((item) => (
                <button
                  key={item.title}
                  className={`shadow-[0_2px_4px_0_rgba(18,41,164,0.1)] shrink-0 text-primary px-[17px] py-[4px] rounded-[10px] text-[14px] border-[1px] ${
                    item.title === '매물 타입'
                      ? 'border-transparent bg-[#FAFAFF]'
                      : ''
                  } ${
                    item.title === filter
                      ? 'border-primary bg-[#fafaff]'
                      : isSelected(item.title)
                      ? 'bg-[#fafaff] border-transparent' // 값이 선택된 필터
                      : 'border-transparent bg-white'
                  }   `}
                  onDragStart={(e) => e.preventDefault()}
                  disabled={item.title === '매물 타입' && true}
                  onClick={() =>
                    setFilter((prev) => (prev === item.title ? '' : item.title))
                  }
                >
                  {item.title}
                </button>
              ))}
            </div>
            {filter !== '' && (
              <div className="bg-white py-[14px] px-[20px] rounded-[10px] absolute top-[42px] left-[24px] right-[24px] z-10">
                {filter === '거래유형' && (
                  <div className="flex justify-between">
                    <TransactionType
                      txnType={txnType}
                      setTxnType={setTxnType}
                    />
                    <button
                      onClick={() => setTxnType([])}
                      className="text-[10px] text-[#666666] font-normal flex gap-[3px] items-center"
                    >
                      <img
                        src={resetIcon}
                        alt="resetIcon"
                        className="w-[7px] h-[9px]"
                      />
                      선택해제
                    </button>
                  </div>
                )}
                {filter === '가격' && (
                  <div className="flex justify-center relative">
                    <Price
                      txnType={txnType}
                      price={price}
                      setPrice={setPrice}
                    />
                    <button
                      onClick={() => setPrice({ ...PRICE_DEFAULTS })}
                      className="text-[10px] text-[#666666] font-normal absolute right-0 bottom-0 flex items-center gap-[3px]"
                    >
                      <img
                        src={resetIcon}
                        alt="resetIcon"
                        className="w-[7px] h-[9px]"
                      />
                      선택해제
                    </button>
                  </div>
                )}
                {filter === '평형' && (
                  <div className="flex justify-center relative">
                    <Area area={area} setArea={setArea} />
                    <button
                      onClick={() => setArea([0, 60])}
                      className="text-[10px] text-[#666666] font-normal absolute right-0 bottom-0 flex items-center gap-[3px]"
                    >
                      <img
                        src={resetIcon}
                        alt="resetIcon"
                        className="w-[7px] h-[9px]"
                      />
                      선택해제
                    </button>
                  </div>
                )}
                {filter === '층' && (
                  <div className="flex justify-between">
                    <Floor floor={floor} setFloor={setFloor} />
                    <button
                      onClick={() => setFloor([])}
                      className="text-[10px] text-[#666666] font-normal flex gap-[3px] items-center"
                    >
                      <img
                        src={resetIcon}
                        alt="resetIcon"
                        className="w-[7px] h-[9px]"
                      />
                      선택해제
                    </button>
                  </div>
                )}
                {filter === '화장실 갯수' && (
                  <div className="flex justify-between">
                    <Bathroom bathroom={bathroom} setBathroom={setBathroom} />
                    <button
                      onClick={() => setBathroom([])}
                      className="text-[10px] text-[#666666] font-normal flex gap-[3px] items-center"
                    >
                      <img
                        src={resetIcon}
                        alt="resetIcon"
                        className="w-[7px] h-[9px]"
                      />
                      선택해제
                    </button>
                  </div>
                )}
                {filter === '방 갯수' && (
                  <div className="flex justify-between">
                    <Room room={room} setRoom={setRoom} />
                    <button
                      onClick={() => setRoom([])}
                      className="text-[10px] text-[#666666] font-normal flex gap-[3px] items-center"
                    >
                      <img
                        src={resetIcon}
                        alt="resetIcon"
                        className="w-[7px] h-[9px]"
                      />
                      선택해제
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="h-[573px] absolute top-[50px] pl-[24px] overflow-y-auto flex flex-col no-scrollbar">
            {TEMP_HOME.map((item) => (
              <button className="shrink-0 flex w-[327px] items-center gap-[12px] py-[6px] border-b-[1px] border-[#dde3e9]">
                <div className="relative">
                  <img
                    src={item.image}
                    alt="image"
                    className="w-[140px] h-[100px]"
                  />
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
                <div className="flex flex-col gap-[6px]">
                  <h1 className="text-[14px] font-normal">
                    {item.propertyType} {item.price}
                  </h1>
                  <div className="text-[10px] font-light flex flex-col items-start text-[#666666]">
                    <p>
                      {item.floor}층 {item.area}㎡
                    </p>
                    <p>{item.location}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </TopLayout>
      <Footer />
    </div>
  );
}
