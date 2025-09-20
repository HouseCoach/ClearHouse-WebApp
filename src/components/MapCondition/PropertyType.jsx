import { useState, useEffect } from 'react';
const PROPERTY_TYPE = [
  {
    title: '빌라',
  },
  {
    title: '아파트',
  },
  {
    title: '오피스텔',
  },
  {
    title: '주택',
  },
];

export default function PropertyType({ resetTick }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState([]);
  }, [resetTick]);
  return (
    <div className="flex gap-[12px]">
      {PROPERTY_TYPE.map((item) => {
        const selected = state.includes(item.title);
        return (
          <button
            onClick={() => {
              setState((prev) =>
                prev.includes(item.title) ? [] : [item.title]
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
