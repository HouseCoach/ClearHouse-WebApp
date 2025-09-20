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
export default function AnotherConditionPage() {
  const [resetTick, setResetTick] = useState(0);
  const [txnType, setTxnType] = useState([]);
  const handleResetAll = () => {
    setTxnType([]);
    setResetTick((t) => t + 1);
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
            <PropertyType resetTick={resetTick} />
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
            <Price txnType={txnType} resetTick={resetTick} />
          </div>
          {/* 평형 */}
          <div className="border border-white border-b-[5px] p-[24px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              평형
            </h1>
            <Area resetTick={resetTick} />
          </div>
          {/* 층 */}
          <div className="border border-white border-b-[5px] p-[24px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              층
            </h1>
            <Floor resetTick={resetTick} />
          </div>
          {/* 방 갯수 */}
          <div className="border border-white border-b-[5px] p-[24px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              방 갯수
            </h1>
            <Room resetTick={resetTick} />
          </div>
          {/* 화장실 */}
          <div className="p-[24px] mb-[14px]">
            <h1 className="text-[16px] font-medium text-[#1a1a1a] mb-[12px]">
              화장실 갯수
            </h1>
            <Bathroom resetTick={resetTick} />
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
