import React from "react";
import { IoIosClose } from "react-icons/io";

interface Speaker {
  name: string;
  avatar: string;
}

interface Event {
  name: string;
  date: string;
  description: string;
  speakers: Speaker[];
  attendees: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event;
  darkMode: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, event, darkMode }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
      onClick={handleOutsideClick}
    >
      <div
        className={`relative w-[90vw] sm:w-[440px] h-[470px] sm:h-[380px] rounded-[5px] shadow-lg max-w-md ${
          darkMode ? "bg-[#484554] text-white" : "bg-white text-black"
        }`}
      >
        {/* Close Button */}
        <IoIosClose
          onClick={onClose}
          className={`absolute top-4 right-4 rounded-full border-[1px] h-[24px] w-[24px] p-1 flex items-center justify-center font-bold cursor-pointer ${
            darkMode ? "text-[#334155] bg-[#ADA9BB] border-gray-600" : "text-[#334155] bg-white border-[#E2E8F0]"
          }`}
        />
        
        <h2 className={`text-[18px] px-6 pt-6 font-semibold ${darkMode ? "text-white" : "text-[#334155]"}`}>
          {event.name}
        </h2>
        <p className={`text-[14px] px-6 ${darkMode ? "text-[#FCF7FF]" : "text-[#64748B]"}`}>{event.date}</p>
        <p className={`mt-6 px-6 ${darkMode ? "text-white" : "text-[#334155]"}`}>{event.description}</p>

        <div className="mt-14 px-6 flex items-center justify-start">
          {event.speakers.map((speaker, index) => (
            <div
              key={index}
              className={`relative w-[32px] h-[32px] rounded-full overflow-hidden border-2 border-white ${
                index !== event.speakers.length - 3 ? "-ml-3" : ""
              }`}
              style={{ zIndex: event.speakers.length - index }}
            >
              <img
                src={speaker.avatar}
                alt={speaker.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
        <p className="mt-2 px-6">3 Guest Speakers: {event.speakers.map((s) => s.name).join(", ")}</p>
        <p className="px-6">{event.attendees} Attendees</p>

        {/* Action Buttons */}
        <div
          className={`absolute bottom-0 w-full px-6 gap-2 h-[174px] sm:h-[84px] flex flex-col sm:flex-row items-center justify-center sm:justify-between ${
            darkMode ? "bg-[#ADA9BB]" : "bg-[#F8FAFC]"
          }`}
        >
          <button className="px-4 bg-white w-full sm:w-[58px] text-[#334155] border-[1px] rounded-[5px] h-[36px] border-[#E2E8F0]">
            Edit
          </button>
          <div className="flex w-full sm:w-auto flex-col sm:flex-row gap-2">
            <button className="bg-[#F43F5E] px-4 rounded-[5px] h-[36px] text-white hover:bg-red-600">
              Delete
            </button>
            <button className="bg-[#8576FF] w-full sm:w-auto px-4 text-white rounded-[5px] h-[36px] hover:bg-blue-600">
              Mark as completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
