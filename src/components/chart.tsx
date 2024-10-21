import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', registrations: 700 },
  { name: 'Feb', registrations: 900 },
  { name: 'Mar', registrations: 800 },
  { name: 'Apr', registrations: 400 },
  { name: 'May', registrations: 1000 },
  { name: 'Jun', registrations: 550 },
  { name: 'Jul', registrations: 825 },
  { name: 'Aug', registrations: 375 },
  { name: 'Sep', registrations: 825 },
  { name: 'Oct', registrations: 625 },
  { name: 'Nov', registrations: 975 },
  { name: 'Dec', registrations: 625 },
];

function EventChart({ darkMode }: { darkMode: boolean }) {
  return (
    <ResponsiveContainer width="100%" height={240}>
    <BarChart width={450} height={240} data={data}>
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        fontSize={12}
        stroke={darkMode ? "#ffffff" : "#64748B"} 
      />
      <YAxis
        ticks={[0, 200, 400, 600, 800, 1000]}
        tickFormatter={(value) => value.toLocaleString()}
        axisLine={false}
        tickLine={false}
        fontSize={12}
        stroke={darkMode ? "#ffffff" : "#64748B"} // Set text color based on darkMode
      />
      <Tooltip />
      <Bar dataKey="registrations" fill="#8576FF" radius={[2, 2, 0, 0]} />
    </BarChart>
    </ResponsiveContainer>
  );
}

export default EventChart;
