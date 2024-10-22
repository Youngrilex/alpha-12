import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const pagination = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      {/* Pagination */}
      <div
        className={`flex items-center gap-6 ${
          darkMode ? "text-gray-300" : "text-[#334155]"
        } text-[14px]`}
      >
        <div
          className={`flex items-center justify-center rounded-[3px] h-[36px] w-[36px] ${
            darkMode ? "bg-[#484554]" : "bg-[#E2E8F0]"
          }`}
        >
          <FaAngleLeft
            className={darkMode ? "text-[#8576FF]" : "text-[#64748B]"}
          />
        </div>
        <div className="h-[24px] w-[24px] flex items-center justify-center rounded-full bg-[#8576FF] text-white">
          1
        </div>
        <h1>2</h1>
        <h1>3</h1>
        <div
          className={`flex items-center justify-center h-[36px] w-[36px] border-[1px] rounded-[3px] ${
            darkMode ? "border-[#484554]" : "border-[#E2E8F0]"
          }`}
        >
          <FaAngleRight className={darkMode ? "text-[#8576FF]" : ""} />
        </div>
      </div>

      {/* Rows selector */}
      <div className="flex items-center space-x-2">
        <span className="text-sm">Show:</span>
        <select
          className={`text-sm border text-[14px] focus:ring-1 focus:outline-none rounded-[3px] h-[36px] ${
            darkMode
              ? "bg-[#484554] border-[#484554] text-white focus:ring-gray-500"
              : "border-gray-300"
          }`}
        >
          <option>10 rows</option>
          <option>20 rows</option>
          <option>50 rows</option>
        </select>
      </div>
    </div>
  );
};

export default pagination;
