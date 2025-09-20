import { useState, useEffect } from 'react';
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

export default function Floor({ resetTick }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState([]);
  }, [resetTick]);
  return (
    <div className="flex gap-[12px]">
      {FLOOR.map((item) => {
        const selected = state.includes(item.value);
        return (
          <button
            onClick={() => {
              setState((prev) =>
                prev.includes(item.value) ? [] : [item.value]
              );
            }}
            className={`text-[14px] font-normal text-[#1A1a1a} ${
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
