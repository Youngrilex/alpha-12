import React from 'react';
import {NavEventIcon, NavHomeIcon, NavReportIcon, NavSpeakerIcon, ProfileIcon } from '@/constants/generics';

const BottomNavigation: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <div className={`w-full mb-8 ${darkMode ? 'bg-[#383544] text-white' : 'bg-white text-[#64748B]'} flex px-3 justify-around items-center  border-t ${darkMode ? 'border-[#ADA9BB]' : 'border-gray-200'}`}>
      
      <div className="flex flex-col items-center justify-between pt-3 h-[64px] border-t-2 border-[#8576FF]">
        <NavHomeIcon color={darkMode ? "#8576FF" : "#484554"}/>  {/* Active Icon Color */}
        <span className="text-sm mt-1 text-[#8576FF] ">  {/* Active Text and Border */}
          Home
        </span>
      </div>

      {/* Other Tabs */}
      <div className="flex flex-col items-center pt-3 justify-between h-[64px]">
        <NavEventIcon   color={darkMode ? "#FFFF" : "#484554"}/>
        <span className="text-sm mt-1">Events</span>
      </div>
      <div className="flex flex-col items-center pt-3 justify-between h-[64px]">
        <NavSpeakerIcon color={darkMode ? "#FFFF" : "#484554"}/>
        <span className="text-sm mt-1">Speakers</span>
      </div>
      <div className="flex flex-col items-center pt-3 justify-between h-[64px]">
        <NavReportIcon color={darkMode ? "#FFFF" : "#484554"}/>
        <span className="text-sm mt-1">Reports</span>
      </div>
      <div className="flex flex-col items-center pt-3 justify-between h-[64px]">
        <ProfileIcon color={darkMode ? "#FFFF" : "#484554"}/>
        <span className="text-sm mt-1">Profile</span>
      </div>
    </div>
  );
};

export default BottomNavigation;
