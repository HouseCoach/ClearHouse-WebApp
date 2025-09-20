const FLOOR = [
  {
    title: '반지층',
    value: 0,
  },
  {
    title: '1층',
    value: 1,
  },
  {
    title: '1층 이상',
    value: 2,
  },
  {
    title: '옥탑층',
    value: 3,
  },
];

export default function Floor({ floor, setFloor }) {
  return (
    <div className="flex gap-[12px]">
      {FLOOR.map((item) => {
        const selected = floor.includes(item.value);
        return (
          <button
            key={item.value}
            onClick={() => {
              setFloor((prev) =>
                prev.includes(item.value) ? [] : [item.value]
              );
            }}
            className={`text-[14px] font-normal ${
              selected ? 'text-primary underline' : 'text-[#1a1a1a]'
            }`}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
}
