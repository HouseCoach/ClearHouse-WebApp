import { Map, useKakaoLoader } from 'react-kakao-maps-sdk';

export default function KakaoMap() {
  useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_JS_KEY, // .env에 JS키 넣기
    libraries: ['services', 'clusterer'], // 필요 라이브러리
  });

  return (
    <div className="w-full">
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        style={{ width: '1000px', height: '600px' }} // 높이 꼭 지정!
        level={3}
      />
    </div>
  );
}
