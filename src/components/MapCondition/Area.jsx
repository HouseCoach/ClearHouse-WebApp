import AreaChart from './Area/AreaChart';

export default function Area({ area, setArea }) {
  return (
    <div>
      <AreaChart values={area} onValuesChangeFinish={(v) => setArea(v)} />
    </div>
  );
}
