import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Profile Icon
import { EventIcon, HomeIcon, ReportIcon, SpeakerIcon } from '@/constants/generics';

const BottomNavigation: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <div className={`w-full ${darkMode ? 'bg-[#383544] text-white' : 'bg-white text-[#64748B]'} flex justify-around items-center  border-t ${darkMode ? 'border-[#ADA9BB]' : 'border-gray-200'}`}>
      
      <div className="flex flex-col items-center justify-center h-[64px] border-t-2 border-[#8576FF]">
        <HomeIcon className="text-[24px] text-[#8576FF]" />  {/* Active Icon Color */}
        <span className="text-sm mt-1 text-[#8576FF] ">  {/* Active Text and Border */}
          Home
        </span>
      </div>

      {/* Other Tabs */}
      <div className="flex flex-col items-center justify-center h-[64px]">
        <EventIcon className="text-[24px]" />
        <span className="text-sm mt-1">Events</span>
      </div>
      <div className="flex flex-col items-center justify-center h-[64px]">
        <SpeakerIcon className="text-[24px]" />
        <span className="text-sm mt-1">Speakers</span>
      </div>
      <div className="flex flex-col items-center justify-center h-[64px]">
        <ReportIcon className="text-[24px] text-white" />
        <span className="text-sm mt-1">Reports</span>
      </div>
      <div className="flex flex-col items-center justify-center h-[64px]">
        <FaUserCircle className="text-[24px]" />
        <span className="text-sm mt-1">Profile</span>
      </div>
    </div>
  );
};

export default BottomNavigation;
