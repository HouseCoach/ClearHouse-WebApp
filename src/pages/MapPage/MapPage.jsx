import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/Footer';
import anotherIcon from '../../assets/Map/another-condition.png';
import searchIcon from '../../assets/Map/search-icon.png';
import KakaoMap from '../../components/Map/KakaoMap';
import rurlerIcon from '../../assets/Map/rurler-icon.png';
import locationIcon from '../../assets/Map/location-icon.png';
import resetIcon from '../../assets/Map/reset-icon.png';
import DistanceModal from './DistanceModal';

// filter
import TransactionType from '../../components/MapCondition/TransactionType';
import Price from '../../components/MapCondition/Price';
import Area from '../../components/MapCondition/Area';
import Floor from '../../components/MapCondition/Floor';
import Bathroom from '../../components/MapCondition/Bathroom';
import Room from '../../components/MapCondition/Room';

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
export default function MapPage() {
  const navigate = useNavigate();
  const [txnType, setTxnType] = useState([]);
  const [price, setPrice] = useState({ ...PRICE_DEFAULTS }); // 가격
  const [area, setArea] = useState([0, 60]); // 평형
  const [floor, setFloor] = useState([]); // 층
  const [bathroom, setBathroom] = useState([]); // 화장실 갯수
  const [room, setRoom] = useState([]);
  const [filter, setFilter] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

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
  return (
    <div className="w-full">
      <div className="bg-slate-400 relative h-[721px]">
        <div className="absolute inset-0">
          <KakaoMap />
        </div>
        <div className="w-[327px] h-[45px] bg-white rounded-[10px] py-[10px] px-[12px] flex items-center justify-between absolute top-[71px] left-[24px] ">
          <button onClick={() => navigate('/home/another-condition-page')}>
            <img
              src={anotherIcon}
              alt="anotherIcon"
              className="w-[24px] h-[24px]"
            />
          </button>
          <input
            type="text"
            className="w-[245px] h-[30px] border-none outline-none"
          />
          <button>
            <img
              src={searchIcon}
              alt="searchIcon"
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>
        {/* Filter */}
        <div
          className="flex gap-[7px] absolute top-[128px] left-[24px] no-scrollbar  overflow-x-auto w-[351px] pb-[15px]"
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
              className={`shrink-0 text-primary px-[17px] py-[4px] rounded-[10px] text-[14px] border-[1px] ${
                item.title === '매물 타입'
                  ? 'border-transparent bg-[#FAFAFF]'
                  : ''
              } ${
                item.title === filter
                  ? 'border-primary bg-[#fafaff]'
                  : isSelected(item.title)
                  ? 'bg-[#fafaff]' // 값이 선택된 필터
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
          <div className="bg-white py-[14px] px-[20px] rounded-[10px] absolute top-[170px] left-[24px] right-[24px] z-10">
            {filter === '거래유형' && (
              <div className="flex justify-between">
                <TransactionType txnType={txnType} setTxnType={setTxnType} />
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
                <Price txnType={txnType} price={price} setPrice={setPrice} />
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

        {/* ruler & location */}
        <div className="w-[41px] h-[84px] bg-[#ffffff9f] rounded-[10px] flex flex-col items-center gap-[10px] absolute top-[275px] right-[24px]">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center mt-[10px]"
          >
            <img
              src={rurlerIcon}
              alt="rurlerIcon"
              className="w-[20px] h-[20px]"
            />
          </button>
          <div className="w-[41px] h-[1px] bg-[#dadadabb]" />
          <button>
            <img
              src={locationIcon}
              alt="locationIcon"
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>
        <DistanceModal
          modalOpen={modalOpen}
          next={() => navigate('/home/map/distance')}
        />
        {/* button */}
        <div>
          <Link
            to="/home/map/property-list"
            className="w-[302px] h-[60px] text-[18px] bg-primary text-white rounded-[16px] mx-[37px] absolute bottom-[25px] flex justify-center items-center"
          >
            이 동네 매물보기
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
