import { useNavigate } from 'react-router-dom';

import backIcon from '../../assets/back-icon.png';
export default function TopLayout({ children }) {
  const navigate = useNavigate();
  return (
    <div className="s w-full h-full pt-[17px]">
      <div className="px-[18px] h-[28px]">
        <button onClick={() => navigate(-1)}>
          <img src={backIcon} alt="backIcon" className="w-[28px] h-[28px]" />
        </button>
      </div>
      <div className="w-full h-[calc(100vh-45px)]">{children}</div>
    </div>
  );
}
