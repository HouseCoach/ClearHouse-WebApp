import { useState, useEffect } from 'react';
import SaleChart from './Price/SaleChart';
import JeonseChart from './Price/JeonseChart';
import MonthlyChart from './Price/MonthlyChart';
import MonthlyDespositChart from './Price/MonthlyDespositChart';
import NoSelectDepositChart from './Price/NoSelectDepositChart';
import NoSelectMonthlyChart from './Price/NoSelectMonthlyChart';

export default function Price({ txnType, resetTick }) {
  const [saleRange, setSaleRange] = useState([0, 500000]);
  const [jeonseRange, setjeonseRange] = useState([0, 100000]);
  const [monthlyDespositRange, setMonthlyDepositeRange] = useState([0, 30000]);
  const [monthlyRange, setMonthlyRange] = useState([0, 200]);
  const [noSelectDespositRange, setNoSelectDepositeRange] = useState([0, 50]);
  const [noSelectmonthlyRange, setNoSelectMonthlyRange] = useState([0, 200]);
  useEffect(() => {
    setSaleRange([0, 500000]);
    setjeonseRange([0, 100000]);
    setMonthlyDepositeRange([0, 30000]);
    setMonthlyRange([0, 200]);
    setNoSelectDepositeRange([0, 50]);
    setNoSelectMonthlyRange([0, 200]);
  }, [resetTick]);
  return (
    <div>
      {txnType.length === 0 && (
        <div className="flex flex-col gap-[12px]">
          <NoSelectDepositChart
            values={noSelectDespositRange}
            onValuesChangeFinish={(v) => setNoSelectDepositeRange(v)}
          />
          <NoSelectMonthlyChart
            values={noSelectmonthlyRange}
            onValuesChangeFinish={(v) => setNoSelectMonthlyRange(v)}
          />
        </div>
      )}
      {txnType[0] === 'SALE' && (
        <SaleChart
          values={saleRange}
          onValuesChangeFinish={(v) => setSaleRange(v)}
        />
      )}
      {txnType[0] === 'JEONSE' && (
        <JeonseChart
          values={jeonseRange}
          onValuesChangeFinish={(v) => setjeonseRange(v)}
        />
      )}
      {txnType[0] === 'MONTHLY' && (
        <div className="flex flex-col gap-[13px]">
          <MonthlyDespositChart
            values={monthlyDespositRange}
            onValuesChangeFinish={(v) => setMonthlyDepositeRange(v)}
          />
          <MonthlyChart
            values={monthlyRange}
            onValuesChangeFinish={(v) => setMonthlyRange(v)}
          />
        </div>
      )}
    </div>
  );
}
