import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/layout/Footer';
import anotherIcon from '../../assets/Map/another-condition.png';
import searchIcon from '../../assets/Map/search-icon.png';
import KakaoMap from '../../components/Map/KakaoMap';
import closePageIcon from '../../assets/Map/close-distance.png';

export default function DistancePage() {
  const navigate = useNavigate();

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
        <button
          onClick={() => navigate(-1)}
          className="absolute bottom-[24px] right-[27px]"
        >
          <img
            src={closePageIcon}
            alt="closePageIcon"
            className="w-[43px] h-[43px]"
          />
        </button>
      </div>
      <Footer />
    </div>
  );
}
