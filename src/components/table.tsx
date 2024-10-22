import { useState } from "react";
import Modal from "./modal";

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

type StatusType = "Completed" | "In Progress";

interface Event {
  name: string;
  date: string;
  speaker: string;
  status: StatusType;
}

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

const statusStyles = {
  Completed: "bg-[#D1FAE5] text-[#10B981]",
  "In Progress": "bg-[#DBEAFE] text-[#3B82F6]",
};

const darkModeStatusStyles = {
    Completed: "border border-[1px] border-[#65DDB5] text-[#65DDB5]",
    "In Progress": "border border-[1px] border-[#77B1FF] text-[#77B1FF]",
  };

const EventTable = ({ darkMode }: { darkMode: boolean }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Open modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="py-3">
      <table className={`w-full text-left border-collapse table-fixed ${darkMode ? "bg-gray-800 text-white" : ""}`}>
        <thead>
          <tr className={`${darkMode ? "bg-[#6A6676] text-gray-300" : "bg-[#F1F5F9] text-[#64748B]"} text-[12px] font-semibold h-[48px]`}>
            <th className="px-4 py-2 border-b w-[28%]">Event Name</th>
            <th className="px-4 py-2 border-b w-1/4">Date</th>
            <th className="px-4 py-2 border-b w-1/4">Speaker</th>
            <th className="px-4 py-2 border-b w-1/4">Status</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index} className={`text-[14px] h-[48px] ${darkMode ? "bg-[#484554] text-white" : ""}`}>
              <td className="px-4 py-2 w-1/4 truncate" onClick={handleOpenModal}>
                {event.name}
              </td>
              <td className="px-4 py-2 w-[28%] truncate">{event.date}</td>
              <td className="px-4 py-2 w-1/4 truncate">{event.speaker}</td>
              <td className="px-4 py-2 w-1/4 truncate">
                <span
                  className={`flex items-center gap-2 px-2 py-1 text-[12px] w-[100px] font-semibold rounded-full ${
                    darkMode ? darkModeStatusStyles[event.status] : statusStyles[event.status]
                  }`}
                >
                  <div className={`h-[6px] w-[6px] rounded-full ${event.status === "Completed" ? "bg-[#10B981]" : "bg-[#3B82F6]"}`}></div>
                  {event.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} event={event}  darkMode={darkMode}/>
    </div>
  );
};

export default EventTable;




