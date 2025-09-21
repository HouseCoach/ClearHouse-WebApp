import distanceModalIcon from '../../assets/Map/distance-icon.png';

export default function DistanceModal({ modalOpen, next }) {
  if (!modalOpen) return null;
  return (
    <div
      onClick={next}
      className="absolute mx-auto bg-[#0000006b] flex justify-center items-center w-[375px] h-[812px] z-50"
    >
      <div className="flex flex-col gap-[14px] bg-white w-[277px] h-[150px] rounded-[16px] pt-[44px] pb-[14px] justify-center items-center">
        <img
          src={distanceModalIcon}
          alt="distanceModalIcon"
          className="w-[121px] h-[41px]"
        />
        <p className="text-[14px] font-medium">
          거리를 측정할 두 지점을 터치하세요.
        </p>
      </div>
    </div>
  );
}
