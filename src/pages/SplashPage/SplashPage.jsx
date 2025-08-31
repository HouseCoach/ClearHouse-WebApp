import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { motion } from 'framer-motion';

import splashImg1 from '../../assets/splash/splash-first-icon.png';
import splashImg2 from '../../assets/splash/splash-second-icon.png';
import splashImg3 from '../../assets/splash/splash-third-icon.png';

const SWIPER = [
  {
    img: splashImg1,
    title: '투명한 주거 정보를 확인해요',
    description:
      ' 허위 매물 없이 신속하고 정확한\n 주거 결정 과정을 경험하세요.',
  },
  {
    img: splashImg2,
    title: '오직 나를 위한 정보까지 고려해요',
    description:
      '여성 안심 구역, 노인을 위한 주거지 등\n 보호 약자를 위한 정보도 확인할 수 있어요.',
  },
  {
    img: splashImg3,
    title: '중개인 리뷰에 참여해요',
    description: '중개인 리뷰를 확인하고 신뢰감 있는 거래를 선택하세요.',
  },
];

function ProgressDots({ total, step }) {
  return (
    <div className="flex gap-2 justify-center mt-[70px] mb-[125px]">
      {Array.from({ length: total }).map((_, i) =>
        i === step ? (
          <motion.div
            key={i}
            layout
            initial={{ width: 8 }}
            animate={{ width: 24, backgroundColor: '#1229A4' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="h-2 rounded-full"
          />
        ) : (
          <motion.div
            key={i}
            layout
            animate={{ width: 8, backgroundColor: '#D1D5DB' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="h-2 rounded-full"
          />
        )
      )}
    </div>
  );
}

export default function SplashPage() {
  const TOTAL = 3;
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-full flex flex-col justify-end items-center">
      <div className="w-[375px]">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={(swiper) => setStep(swiper.activeIndex)}
        >
          {SWIPER.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col w-[375px] items-center text-center">
                <img
                  src={item.img}
                  alt="img"
                  className=" h-[200px] mb-[32px]"
                />
                <h1 className="text-gray-10 text-[24px] font-medium mb-[12px]">
                  {item.title}
                </h1>
                <p className="text-gray-10 text-[14px] font-light whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ 인디케이터 */}
        <ProgressDots total={TOTAL} step={step} />
      </div>

      {/* 시작하기 버튼 */}
      <Link
        to="/login"
        className="flex justify-center items-center w-[302px] h-[60px] rounded-[16px] bg-primary mb-[60px]"
      >
        <h1 className="text-white text-[18px]">시작하기</h1>
      </Link>
    </div>
  );
}
