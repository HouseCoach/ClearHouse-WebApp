import { useState } from 'react';
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

export default function PropertyType() {
  const [state, setState] = useState([]);

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
