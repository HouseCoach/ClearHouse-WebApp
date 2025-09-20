import { useEffect, useMemo, useState } from 'react';

const PRICE_LABELS = [0, 50000, 100000, 150000, 200000, 300000, 500000];
const MAX_INDEX = PRICE_LABELS.length - 1; // 6

export default function SaleChart({ values, onValuesChangeFinish = () => {} }) {
  // RN과 동일한 인덱스 계산
  const startIdxInit = PRICE_LABELS.indexOf(values[0]);
  const endIdxInit = PRICE_LABELS.indexOf(values[1]);
  const [indices, setIndices] = useState([
    startIdxInit !== -1 ? startIdxInit : 0,
    endIdxInit !== -1 ? endIdxInit : MAX_INDEX,
  ]);

  // 외부 값 변경 시 동기화
  useEffect(() => {
    const s = PRICE_LABELS.indexOf(values[0]);
    const e = PRICE_LABELS.indexOf(values[1]);
    setIndices([s !== -1 ? s : 0, e !== -1 ? e : MAX_INDEX]);
  }, [values[0], values[1]]);

  const [minIdx, maxIdx] = indices;
  const last = MAX_INDEX;

  // 퍼센트 위치
  const leftPct = useMemo(() => (minIdx / last) * 100, [minIdx, last]);
  const rightPct = useMemo(() => (maxIdx / last) * 100, [maxIdx, last]);
  const widthPct = rightPct - leftPct;

  const finish = (i0, i1) => {
    onValuesChangeFinish([PRICE_LABELS[i0], PRICE_LABELS[i1]]);
  };

  const onMinChange = (e) => {
    const v = Math.min(Number(e.target.value), maxIdx - 1);
    setIndices([v, maxIdx]);
  };
  const onMaxChange = (e) => {
    const v = Math.max(Number(e.target.value), minIdx + 1);
    setIndices([minIdx, v]);
  };

  const onPointerUp = () => finish(indices[0], indices[1]);

  const toLabel = (label) =>
    label === 0 ? '0' : `${label / 10000}억${label === 500000 ? '~' : ''}`;

  return (
    <div className={` select-none flex flex-col items-center`}>
      <div className="relative w-[300px]">
        {/* 트랙(회색) */}
        <div className="relative h-[6px] rounded-full bg-[#a3a3a3] overflow-hidden">
          {/* 선택 영역(파랑) */}
          <div
            className="absolute inset-y-0 rounded-full"
            style={{
              left: `${leftPct}%`,
              width: `${widthPct}%`,
              background: '#1229A4',
            }}
          />
          {/* 구분선 */}
          <div className="absolute inset-0 pointer-events-none">
            {PRICE_LABELS.map((_, idx) => (
              <span
                key={idx}
                className="absolute top-0 w-[2px] h-2 bg-[#E5E5E5]"
                style={{ left: `calc(${(idx / MAX_INDEX) * 100}% - 1px)` }}
              />
            ))}
          </div>
        </div>

        {/* 겹치는 range(트랙 숨김, thumb만 보이게) */}
        <input
          type="range"
          min={0}
          max={MAX_INDEX}
          step={1}
          value={minIdx}
          onChange={onMinChange}
          onPointerUp={onPointerUp}
          aria-label="최소 보증금"
          className="tw-range absolute left-0 right-0 bg-transparent -top-[10px]"
        />
        <input
          type="range"
          min={0}
          max={MAX_INDEX}
          step={1}
          value={maxIdx}
          onChange={onMaxChange}
          onPointerUp={onPointerUp}
          aria-label="최대 보증금"
          className="tw-range absolute left-0 right-0 bg-transparent -top-[10px]"
        />

        {/* 라벨 */}
        <div className="mt-2 text-[10px] text-[#666666] w-[300px] flex justify-between absolute left-1">
          {PRICE_LABELS.map((v, i) => (
            <span key={i} className="text-center">
              {toLabel(v)}
            </span>
          ))}
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="mt-[30px]">
        <div>
          <button type="button" className="text-[12px] text-primary underline">
            직접 입력
          </button>
          {/* <button
            type="button"
            onClick={() => {
              setIndices([0, MAX_INDEX]);
              onValuesChangeFinish([PRICE_LABELS[0], PRICE_LABELS[MAX_INDEX]]);
            }}
            className="flex items-center gap-1 text-[11px] text-[#666] py-2"
          >
            <span>선택해제</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
