import { Link, useLocation } from 'react-router-dom';

import inactiveHomeIcon from '../../assets/layout/inactive/home.png';
import inactiveChatIcon from '../../assets/layout/inactive/chat.png';
import inactivePersonIcon from '../../assets/layout/inactive/person.png';
import activeHomeIcon from '../../assets/layout/active/home.png';
// import activeChatIcon from '../../assets/layout/active/chat.png'
import activePersonIcon from '../../assets/layout/active/person.png';

const TAP = [
  {
    title: 'home',
    inactiveIcon: inactiveHomeIcon,
    activeIcon: activeHomeIcon,
    to: '/home',
    activeWhen: ['/home/*'],
  },
  {
    title: 'chat',
    inactiveIcon: inactiveChatIcon,
    activeIcon: activePersonIcon,
    to: '/chat',
  },
  {
    title: 'person',
    inactiveIcon: inactivePersonIcon,
    activeIcon: activePersonIcon,
    to: '/my-page',
  },
];

export default function Footer() {
  const location = useLocation();

  // ✅ 아주 직관적인 경로 매칭
  const pathMatches = (pattern, pathname) => {
    if (pattern.endsWith('/*')) {
      const base = pattern.slice(0, -2); // '/home/*' -> '/home'
      return pathname === base || pathname.startsWith(base + '/');
    }
    return pathname === pattern;
  };

  const isActive = (item) => {
    const patterns = item.activeWhen?.length ? item.activeWhen : [item.to];
    return patterns.some((p) => pathMatches(p, location.pathname));
  };
  return (
    <div className="w-full h-[91px] flex justify-between px-[53px] items-start pt-[16px] absolute bottom-0">
      {TAP.map((item, idx) => (
        <Link key={idx} to={item.to} className=" h-[70px] flex ">
          <img
            src={isActive(item) ? item.activeIcon : item.inactiveIcon}
            alt="icon"
            className="w-[24px] h-[24px]"
          />
        </Link>
      ))}
    </div>
  );
}
