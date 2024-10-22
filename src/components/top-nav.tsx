import EventCards from "./cards";
import { CustomCarousel } from "./carousel";
import EventChart from "./chart";
import { History } from "./history";
import TableComponent from "./mobileTable";
import Pagination from "./pagination";
import EventTable from "./table";


export function TopNav({ darkMode }: { darkMode: boolean }) {
    return (
      <header className={darkMode ? "dark bg-[#383544] text-white" : "bg-white text-black"}>       
          <div className="p-6">
            <EventCards darkMode={darkMode}/>
            <h1 className="text-[18px] font-medium mt-6 mb-4">
              Event Registrations per month
            </h1>
            <div className="sm:h-[320px] md:h-[320px] lg:h-[320px] w-full flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center gap-4">
              <div 
              className={`w-full  sm:w-1/2 md:w-1/2 lg:w-1/2 h-full pt-12  rounded-[5px] ${ darkMode ? "bg-[#484554]" : "border-[1px] border-[#F2F2F7] bg-white"}`}
              >
                <EventChart darkMode={darkMode}/>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
                <CustomCarousel />
              </div>
            </div>
            <History darkMode={darkMode}/>
            <div className="hidden sm:block"> <EventTable darkMode={darkMode} /></div>           
            <div className="block sm:hidden -mx-6"><TableComponent darkMode={darkMode} /></div>
            <Pagination darkMode={darkMode}/>
          </div>       
      </header>
    );
  }
  