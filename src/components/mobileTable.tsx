import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Modal from './modal';

const event = {
    name: "Event Name",
    date: "Event Date",
    description: "Event Description",
    speakers: [
      { name: "Speaker name A", avatar: "/avt-1.png" },
      { name: "Speaker name B", avatar: "/avt-2.png" },
      { name: "Speaker name C", avatar: "/avt-3.png" },
    ],
    attendees: 300,
  };
  

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
    { name: "Cloud Innovation Summit", date: "2024-10-15", speaker: "Jane Doe", status: "Completed" },
    { name: "Blockchain Revolution Conference", date: "2024-11-05", speaker: "Dr. Peter Smith", status: "In Progress" },
    { name: "AI in Healthcare Symposium", date: "2024-12-01", speaker: "Dr. Akira Malik", status: "Completed" },
    { name: "Future of Fintech Forum", date: "2024-10-25", speaker: "John Lee", status: "Completed" },
    { name: "Data Analytics in Business", date: "2024-11-12", speaker: "Rachel Moore", status: "Completed" },
    { name: "Sustainable Energy Expo", date: "2024-09-28", speaker: "Prof. Alan Green", status: "Completed" },
    { name: "Web3 Interfaces Workshop", date: "2024-10-10", speaker: "Kevin Adams", status: "In Progress" },
    { name: "Cybersecurity for Startups", date: "2024-11-19", speaker: "Emily Zhang", status: "Completed" },
    { name: "Smart Cities Forum", date: "2024-10-18", speaker: "Dr. Maria Hernandez", status: "In Progress" },
    { name: "Tech Safari Mixer", date: "2024-09-30", speaker: "Guest Panel", status: "In Progress" },
];

const TableComponent = ({ darkMode }: { darkMode: boolean }) => {
    const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>({});
    const [isModalOpen, setModalOpen] = useState(false);
  
    const handleRowClick = (index: number) => {
      setExpandedRows((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    };

   

    // Open modal
    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    // Close modal
    const handleCloseModal = () => {
      setModalOpen(false);
    };
  
    const statusStyles: { [key: string]: string } = {
      "Completed": "bg-[#10B981] text-white",
      "In Progress": "bg-[#3B82F6] text-white",
    };
  
    return (
      <table className={`w-full text-left border-collapse mt-2 ${darkMode ? 'bg-[#1F2937] text-white' : 'bg-white text-gray-900'}`}>
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
                  <div className="flex gap-5 items-center" >
                    <span className={`w-[6.5px] ${darkMode ? 'text-[#FCF7FF]' : 'text-[#334155]'}`}>
                      {expandedRows[index] ? <MdKeyboardArrowRight /> : <IoIosArrowDown />}
                    </span>
                    <span className={`${darkMode? 'text-[#FCF7FF]':''}`} onClick={handleOpenModal}>{event.name}</span>
                  </div>
                </td>
                <td className="py-3">
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
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} event={event}  darkMode={darkMode}/>
      </table>
    );
  };
  
  

export default TableComponent;
