import SaleChart from './Price/SaleChart';
import JeonseChart from './Price/JeonseChart';
import MonthlyChart from './Price/MonthlyChart';
import MonthlyDespositChart from './Price/MonthlyDespositChart';
import NoSelectDepositChart from './Price/NoSelectDepositChart';
import NoSelectMonthlyChart from './Price/NoSelectMonthlyChart';

export default function Price({ txnType, price, setPrice }) {
  const update = (key, nextRange) => {
    setPrice((prev) => ({ ...prev, [key]: nextRange }));
  };

  return (
    <div>
      {txnType.length === 0 && (
        <div className="flex flex-col gap-[12px]">
          <NoSelectDepositChart
            values={price.noSelDeposit}
            onValuesChangeFinish={(v) => update('noSelDeposit', v)}
          />
          <NoSelectMonthlyChart
            values={price.nonoSelMonthly}
            onValuesChangeFinish={(v) => update('noSelMonthly', v)}
          />
        </div>
      )}
      {txnType[0] === 'SALE' && (
        <SaleChart
          values={price.sale}
          onValuesChangeFinish={(v) => update('sale', v)}
        />
      )}
      {txnType[0] === 'JEONSE' && (
        <JeonseChart
          values={price.jeonse}
          onValuesChangeFinish={(v) => update('jeonse', v)}
        />
      )}
      {txnType[0] === 'MONTHLY' && (
        <div className="flex flex-col gap-[13px]">
          <MonthlyDespositChart
            values={price.monthlyDeposit}
            onValuesChangeFinish={(v) => update('monthlyDeposit', v)}
          />
          <MonthlyChart
            values={price.monthly}
            onValuesChangeFinish={(v) => update('monthly', v)}
          />
        </div>
      )}
    </div>
  );
}
