import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

// Define an interface for your event data
interface Event {
  name: string;
  date: string;
  speaker: string;
  status: "Completed" | "In Progress"; // Use union types for predefined statuses
}

// interface TableComponentProps {
//   events: Event[]; // Define events as an array of Event
// }

// Example data that can be passed into TableComponent
const events: Event[] = [
    { name: "Cloud Innovative Summit", date: "2024-10-15", speaker: "Jane Doe", status: "Completed" },
    { name: "Blockchain Resolution Conference", date: "2024-12-01", speaker: "Dr. Peter Smith", status: "In Progress" },
    { name: "AI in Healthcare Symposium", date: "2024-11-03", speaker: "Dr. Akira Malik", status: "Completed" },
    { name: "Future of Fintech Forum", date: "2024-10-25", speaker: "John Lee", status: "Completed" },
    { name: "Data Analytics in Business", date: "2024-11-12", speaker: "Rachel Moore", status: "Completed" },
    { name: "Sustainable Energy Expo", date: "2024-11-18", speaker: "Prof. Alan Green", status: "In Progress" },
    { name: "Web3 Investors Workshop", date: "2024-12-09", speaker: "Kevin Adams", status: "In Progress" },
    { name: "Cybersecurity for Startups", date: "2024-12-14", speaker: "Emily Zhang", status: "Completed" },
    { name: "Smart Cities Forum", date: "2024-10-30", speaker: "Dr. Maria Hernandez", status: "In Progress" },
    { name: "Tech Safari Mixer", date: "2024-09-30", speaker: "Guest Panel", status: "In Progress" },
];

const TableComponent = ({ darkMode }: { darkMode: boolean }) => {
    const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>({});
  
    const handleRowClick = (index: number) => {
      setExpandedRows((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    };
  
    const statusStyles: { [key: string]: string } = {
      "Completed": "bg-[#10B981] text-white",
      "In Progress": "bg-[#3B82F6] text-white",
    };
  
    return (
      <table className={`w-full text-left border-collapse ${darkMode ? 'bg-[#1F2937] text-gray-300' : 'bg-white text-gray-900'}`}>
        <thead>
          <tr className={`${darkMode ? 'bg-[#6A6676] text-[#FCF7FF]' : 'bg-[#F1F5F9] text-[#64748B]'} text-xs font-semibold h-12`}>
            <th className="px-4 py-2 w-2/3">Event Name</th>
            <th className="px-4 py-2 w-1/3">Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <React.Fragment key={index}>
              <tr
                className={`cursor-pointer ${darkMode ? 'bg-[#484554]' : 'bg-white'}`}
                onClick={() => handleRowClick(index)}
              >
                <td className="px-4 py-3 text-sm">
                  <div className="flex gap-5 items-center">
                    <span className={`w-[6.5px] ${darkMode ? 'text-[#FCF7FF]' : 'text-[#334155]'}`}>
                      {expandedRows[index] ? <MdKeyboardArrowRight /> : <IoIosArrowDown />}
                    </span>
                    <span className={`${darkMode? 'text-[#FCF7FF]':''}`}>{event.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[event.status]}`}>
                    {event.status}
                  </span>
                </td>
              </tr>
  
              {expandedRows[index] && (
                <tr>
                  <td colSpan={2} className={`${darkMode ? 'bg-[#383544] text-gray-300' : 'bg-[#F1F5F9] text-gray-800'} px-4 py-3`}>
                    <div className="flex justify-between items-center">
                      <span className={`${darkMode? 'text-[#FCF7FF]':'text-[#334155]'}`}>{event.speaker}</span>
                      <span className={`${darkMode ? 'text-[#FCF7FF]' : 'text-[#334155]'}`}>{event.date}</span>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  };
  
  

export default TableComponent;
