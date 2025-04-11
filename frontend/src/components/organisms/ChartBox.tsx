import { LineChart, Line, XAxis, YAxis } from 'recharts';

export const ChartBox = () => {
  const data = [
    { name: 'Jan', value: 400 },
    { name: 'Feb', value: 300 },
  ];

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <LineChart width={300} height={200} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};
