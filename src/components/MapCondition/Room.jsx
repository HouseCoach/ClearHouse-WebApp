const ROOM = [
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

export default function Room({ room, setRoom }) {
  return (
    <div className="flex gap-[12px]">
      {ROOM.map((item) => {
        const selected = room.includes(item.value);
        return (
          <button
            key={item.value}
            onClick={() => {
              setRoom((prev) =>
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
