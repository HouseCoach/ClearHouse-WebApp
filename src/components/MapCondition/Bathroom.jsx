import { useState, useEffect } from 'react';
const BATHROOM = [
  {
    title: '1개',
    value: 1,
  },
  {
    title: '2개',
    value: 2,
  },
  {
    title: '3개',
    value: 3,
  },
  {
    title: '4개 이상',
    value: 4,
  },
];

export default function Bathroom({ resetTick }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState([]);
  }, [resetTick]);
  return (
    <div className="flex gap-[12px]">
      {BATHROOM.map((item) => {
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
