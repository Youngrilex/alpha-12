import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

// Define the full data with three-letter month names
const data = [
  { name: "Jan", registrations: 700 },
  { name: "Feb", registrations: 925 },
  { name: "Mar", registrations: 800 },
  { name: "Apr", registrations: 425 },
  { name: "May", registrations: 1000 },
  { name: "Jun", registrations: 550 },
  { name: "Jul", registrations: 850 },
  { name: "Aug", registrations: 375 },
  { name: "Sep", registrations: 825 },
  { name: "Oct", registrations: 725 },
  { name: "Nov", registrations: 975 },
  { name: "Dec", registrations: 625 },
];

// Function to modify month names to two letters if on mobile
const getModifiedData = (isMobile: boolean) => {
  if (isMobile) {
    return data.map((item) => ({
      ...item,
      name: item.name.slice(0, 2), // Take only the first two letters of the month name
    }));
  }
  return data; // Return the full names if not on mobile
};

function EventChart({ darkMode }: { darkMode: boolean }) {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile screens
    };

    // Initialize on mount and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const modifiedData = getModifiedData(isMobile);

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart width={450} height={240} data={modifiedData}>
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
          stroke={darkMode ? "#ffffff" : "#64748B"}
        />
        <Tooltip />
        <Bar dataKey="registrations" fill="#8576FF" radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default EventChart;
