const TRANSACTION_TYPE = [
  {
    title: '매매',
    value: 'SALE',
  },
  {
    title: '전세',
    value: 'JEONSE',
  },
  {
    title: '월세',
    value: 'MONTHLY',
  },
];

export default function TransactionType({ txnType, setTxnType }) {
  return (
    <div className="flex gap-[12px]">
      {TRANSACTION_TYPE.map((item) => {
        const selected = txnType.includes(item.value);
        return (
          <button
            key={item.value}
            onClick={() => {
              setTxnType((prev) =>
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
