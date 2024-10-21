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

  // Function to handle clicks outside the modal content
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close modal if clicked on the overlay (outside the modal content)
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50"
      onClick={handleOutsideClick} // Attach click handler to the overlay
    >
      <div
        className={`${
          darkMode ? "bg-[#484554] text-white" : "bg-white"
        } rounded-[5px] max-w-md shadow-lg relative w-[440px] sm:h-[380px] md:h-[380px] lg:h-[380px]`}
      >
        <IoIosClose
          onClick={onClose}
          className={`absolute flex items-center justify-center font-bold top-4 right-4 ${
            darkMode
              ? "text-[#334155] bg-[#ADA9BB] border-gray-600"
              : "text-[#334155] bg-white border-[#E2E8F0]"
          } rounded-full border-[1px] h-[24px] w-[24px] p-1`}
        />
        {/* Event Info */}
        <h2 className={`text-[18px] px-6 pt-6  font-semibold ${darkMode ? "text-white" : "text-[#334155]"}`}>
          {event.name}
        </h2>
        <p className={`text-[14px] px-6  ${darkMode ? "text-[#FCF7FF]" : "text-[#64748B]"}`}>
          {event.date}
        </p>
        <p className={`mt-6 px-6  ${darkMode ? "text-white" : "text-[#334155]"}`}>
          {event.description}
        </p>

        {/* Guest Speakers */}
        <div className="mt-14 px-6  flex items-center justify-start">
          {event.speakers.map((speaker, index) => (
            <div
              key={index}
              className={`relative w-[32px] h-[32px] rounded-full overflow-hidden border-2 border-white ${
                index !== event.speakers.length - 3 ? "-ml-3" : ""
              }`}
              style={{ zIndex: event.speakers.length - index }} // Reverse z-index to stack first avatar on top
            >
              <img
                src={speaker.avatar}
                alt={speaker.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>
        <p className="mt-2 px-6 ">
          3 Guest Speakers: {event.speakers.map((s) => s.name).join(", ")}
        </p>
        <p className="px-6">{event.attendees} Attendees</p>

        {/* Action Buttons */}
        <div className={`absolute w-full px-6 bottom-0 h-[84px] flex flex-col items-center sm:flex-row md:flex-row lg:flex-row justify-between ${darkMode? 'bg-[#ADA9BB]':'bg-[#F8FAFC]'}`}>
          <button
            className='px-4 bg-white text-[#334155] border-[1px] rounded-[5px] h-[36px] border-[#E2E8F0]'
          >
            Edit
          </button>
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-2">
            <button className="bg-[#F43F5E] px-4 rounded-[5px] h-[36px] hover:bg-red-600">
              Delete
            </button>
            <button className="bg-[#8576FF] px-4 rounded-[5px] h-[36px] hover:bg-blue-600">
              Mark as completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
