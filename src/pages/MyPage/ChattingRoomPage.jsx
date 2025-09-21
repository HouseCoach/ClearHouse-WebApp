import TopLayout from '../../components/layout/TopLayout';
import Footer from '../../components/layout/Footer';
import Home from '../../components/Home';

export default function ChattingRoomPage() {
  return (
    <div>
      <TopLayout title="문의한 방">
        {/* home 컴포넌트 */}
        <div className="h-[589px] mt-[25px] pl-[24px] overflow-y-auto flex flex-col no-scrollbar">
          <Home />
        </div>
      </TopLayout>
      <Footer />
    </div>
  );
}
