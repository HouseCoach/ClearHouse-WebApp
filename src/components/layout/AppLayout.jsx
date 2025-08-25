export default function AppLayout({ children }) {
  return (
    <div className="bg-gray-100 w-screen h-screen">
      <div className="w-[375px] h-full bg-[#FAFAFF] mx-auto">{children}</div>
    </div>
  );
}
