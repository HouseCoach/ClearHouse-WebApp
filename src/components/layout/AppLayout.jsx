export default function AppLayout({ children }) {
  return (
    <div className=" w-screen h-full flex justify-center pt-[25px]">
      <div className="w-[375px] h-[812px] bg-[#FAFAFF] shadow-lg">
        {children}
      </div>
    </div>
  );
}
