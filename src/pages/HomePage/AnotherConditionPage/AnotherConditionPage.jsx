import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/layout/Footer';
import TopLayout from '../../../components/layout/TopLayout';

import PropertyType from '../../../components/MapCondition/PropertyType';
import TransactionType from '../../../components/MapCondition/TransactionType';
import Price from '../../../components/MapCondition/Price';
import Area from '../../../components/MapCondition/Area';
import Floor from '../../../components/MapCondition/Floor';
import Room from '../../../components/MapCondition/Room';
import Bathroom from '../../../components/MapCondition/Bathroom';

const PRICE_DEFAULTS = {
  sale: [0, 500000],
  jeonse: [0, 100000],
  monthlyDeposit: [0, 30000],
  monthly: [0, 200],
  noSelDeposit: [0, 50],
  noSelMonthly: [0, 200],
};

export default function AnotherConditionPage() {
  const [txnType, setTxnType] = useState([]);
  const [price, setPrice] = useState({ ...PRICE_DEFAULTS }); // 가격
  const [area, setArea] = useState([0, 60]); // 평형
  const [floor, setFloor] = useState([]); // 층
  const [bathroom, setBathroom] = useState([]); // 화장실 갯수
  const [room, setRoom] = useState([]);
  const handleResetAll = () => {
    setTxnType([]);
    setPrice({ ...PRICE_DEFAULTS });
    setArea([0, 60]);
    setFloor([]);
    setBathroom([]);
    setRoom([]);
  };
  const navigate = useNavigate();

  return (
    <div>
      <TopLayout title="다른 조건으로 검색하기">
        <div className="overflow-y-auto h-[615px] no-scrollbar">
          {/* 매물 타입 */}
          <div className="border border-white border-b-[5px] p-[24px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              매물 타입
            </h1>
            <PropertyType />
          </div>
          {/* 거래 유형 */}
          <div className="border border-white border-b-[5px] p-[24px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              거래 유형
            </h1>
            <TransactionType txnType={txnType} setTxnType={setTxnType} />
          </div>
          {/* 가격 */}
          <div className="border border-white border-b-[5px] p-[24px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[13px]">
              가격
            </h1>
            <Price txnType={txnType} price={price} setPrice={setPrice} />
          </div>
          {/* 평형 */}
          <div className="border border-white border-b-[5px] p-[24px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              평형
            </h1>
            <Area area={area} setArea={setArea} />
          </div>
          {/* 층 */}
          <div className="border border-white border-b-[5px] p-[24px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              층
            </h1>
            <Floor floor={floor} setFloor={setFloor} />
          </div>
          {/* 방 갯수 */}
          <div className="border border-white border-b-[5px] p-[24px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              방 갯수
            </h1>
            <Room room={room} setRoom={setRoom} />
          </div>
          {/* 화장실 */}
          <div className="p-[24px] mb-[14px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              화장실 갯수
            </h1>
            <Bathroom bathroom={bathroom} setBathroom={setBathroom} />
          </div>
          <div className="flex gap-[9px] px-[24px]">
            <button
              onClick={handleResetAll}
              className="w-[159px] h-[60px] rounded-[16px] bg-[#eaecff] text-[18px] font-medium text-[#4d4d4d]"
            >
              선택해제
            </button>
            <button
              onClick={() => navigate(-1)}
              className="w-[159px] h-[60px] rounded-[16px] bg-primary text-[18px] font-medium text-white"
            >
              완료
            </button>
          </div>
        </div>
        <Footer />
      </TopLayout>
    </div>
  );
}
