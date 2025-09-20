import { useState, useEffect } from 'react';
import AreaChart from './Area/AreaChart';

export default function Area({ resetTick }) {
  const [areaRange, setAreaRange] = useState([0, 60]);
  useEffect(() => {
    setAreaRange([0, 60]);
  }, [resetTick]);

  return (
    <div>
      <AreaChart
        values={areaRange}
        onValuesChangeFinish={(v) => setAreaRange(v)}
      />
    </div>
  );
}
