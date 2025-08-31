import Footer from '../../components/layout/Footer';

import billaIcon from '../../assets/Home/billa-icon.png';
import opiIcon from '../../assets/Home/opi-icon.png';
import aptIcon from '../../assets/Home/aprt-icon.png';
import juIcon from '../../assets/Home/ju-icon.png';

const HOME_TYPE = [
  {
    title: '빌라',
    icon: billaIcon,
    to: '/billa',
  },
  {
    title: '오피스텔',
    icon: opiIcon,
    to: '/opi',
  },
  {
    title: '아파트',
    icon: aptIcon,
    to: '/apt',
  },
  {
    title: '주택',
    icon: juIcon,
    to: '/ju',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* logo */}
      <div></div>
      {/* house */}
      <div></div>
      {/* 검증 매물 */}
      <div></div>
      {/* 맞춤 매물 */}
      <div></div>
      <Footer />
    </div>
  );
}
