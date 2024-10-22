import { SearchIcon } from "@/constants/generics";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

// History Component
export const History = ({ darkMode }: { darkMode: boolean }) => {
  // Shared input styles
  const inputClasses =
    "px-2 py-2 text-[14px] border-gray-300 focus:ring-1 focus:outline-none rounded-[3px] h-[36px]";
  
  // Conditional dark mode styles
  const darkModeClasses = darkMode
    ? "border-gray-600 bg-[#484554] text-white focus:ring-gray-500"
    : "border border-gray-300 bg-white text-black focus:ring-gray-300";

  return (
    <section>
      <h1 className={`text-[18px] font-medium mt-5 ${darkMode ? "text-white" : "text-black"}`}>
        Events History
      </h1>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row justify-between py-1 space-y-2 sm:space-y-0 sm:space-x-2">
        <fieldset className="flex w-full sm:w-auto flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center">

          {/* Search Input */}
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search..."
              className={`pl-8 pr-4 ${inputClasses} w-full sm:w-[200px] ${darkModeClasses}`}
              aria-label="Search events"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <SearchIcon />
            </div>
          </div>

          {/* Filters */}
          {["Date", "Status", "Name"].map((label, index) => (
            <select
              key={index}
              aria-label={`Filter by ${label}`}
              className={`${inputClasses} w-full sm:w-auto ${darkModeClasses}`}
            >
              <option>{label}</option>
            </select>
          ))}

          {/* Displaying Results */}
          <p className={`hidden lg:flex text-[14px] font-semibold ${darkMode ? "text-white" : "text-[#334155]"}`}>
            Displaying 100 results
          </p>
        </fieldset>

        {/* Sort and Export Actions */}
        <div className="hidden sm:flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm">Sort:</label>
          <select id="sort" className={`${inputClasses} ${darkModeClasses}`}>
            <option>Most Recent</option>
          </select>

          <button
            aria-label="More options"
            className={`w-[36px] h-[36px] border rounded-[3px] flex items-center justify-center ${darkModeClasses}`}
          >
            <HiOutlineDotsVertical className={darkMode ? "text-white" : "text-[#141414]"} />
          </button>

          <button className={`${inputClasses} flex items-center gap-2 ${darkModeClasses}`}>
            <FiDownload className={`w-[14px] h-[14px] ${darkMode ? "text-white" : "text-[#141414]"}`} />
            Export
          </button>
        </div>

        {/* Mobile View Results Display */}
        <p className={`flex sm:hidden text-[14px] font-semibold ${darkMode ? "text-white" : "text-[#334155]"}`}>
          Displaying 100 results
        </p>

        {/* Mobile Sort and Export */}
        <div className="flex sm:hidden flex-col space-y-2 w-full">
          <div className="flex items-center justify-between w-full">
            <label htmlFor="sort-mobile" className="text-sm">Sort:</label>
            <select id="sort-mobile" className={`${inputClasses} ${darkModeClasses}`}>
              <option>Most Recent</option>
            </select>
          </div>

          <div className="flex items-center justify-between w-full">
            <button
              aria-label="More options"
              className={`w-[36px] h-[36px] border rounded-[3px] flex items-center justify-center ${darkModeClasses}`}
            >
              <HiOutlineDotsVertical className={darkMode ? "text-white" : "text-[#141414]"}/>
            </button>

            <button className={`${inputClasses} flex items-center gap-2 ${darkModeClasses}`}>
              <FiDownload className={`w-[14px] h-[14px] ${darkMode ? "text-white" : "text-[#141414]"}`}/>
              Export
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
