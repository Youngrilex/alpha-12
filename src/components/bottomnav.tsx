import React from "react";
import {
  NavEventIcon,
  NavHomeIcon,
  NavReportIcon,
  NavSpeakerIcon,
  ProfileIcon,
} from "@/constants/generics";

// BottomNavigation Component
const BottomNavigation: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <nav
      className={`w-full mb-8 flex px-3 justify-around items-center border-t ${
        darkMode
          ? "bg-[#383544] text-white border-[#ADA9BB]"
          : "bg-white text-[#64748B] border-gray-200"
      }`}
      aria-label="Bottom navigation"
    >
      {/* Active Tab (Home) */}
      <ul className="flex justify-around w-full">
        <li className="flex flex-col items-center justify-between pt-3 h-[64px] border-t-2 border-[#8576FF]">
          <NavHomeIcon color={darkMode ? "#8576FF" : "#484554"} />
          <span className="text-sm mt-1 text-[#8576FF]">Home</span>
        </li>

        {/* Inactive Tabs */}
        <li className="flex flex-col items-center justify-between pt-3 h-[64px]">
          <NavEventIcon color={darkMode ? "#FFFF" : "#484554"} />
          <span className="text-sm mt-1">Events</span>
        </li>
        <li className="flex flex-col items-center justify-between pt-3 h-[64px]">
          <NavSpeakerIcon color={darkMode ? "#FFFF" : "#484554"} />
          <span className="text-sm mt-1">Speakers</span>
        </li>
        <li className="flex flex-col items-center justify-between pt-3 h-[64px]">
          <NavReportIcon color={darkMode ? "#FFFF" : "#484554"} />
          <span className="text-sm mt-1">Reports</span>
        </li>
        <li className="flex flex-col items-center justify-between pt-3 mb-4 h-[64px]">
          <ProfileIcon color={darkMode ? "#FFFF" : "#484554"} />
          <span className="text-sm mt-1">Profile</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
