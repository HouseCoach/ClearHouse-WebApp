import { useNavigate } from 'react-router-dom';

import backIcon from '../../assets/back-icon.png';
export default function TopLayout({ children, title, icon }) {
  const navigate = useNavigate();
  return (
    <div className="h-full pt-[42px]">
      <div className="px-[18px] h-[56px] flex justify-between items-center">
        <button onClick={() => navigate(-1)}>
          <img src={backIcon} alt="backIcon" className="w-[28px] h-[28px]" />
        </button>
        <h1 className="text-[20px]">{title}</h1>
        <button className="w-[29px] h-[20px]">
          {icon && <img src={icon} alt="icon" className="w-[18px] h-[20px]" />}
        </button>
      </div>
      <div className="w-full h-[714px]">{children}</div>
    </div>
  );
}
