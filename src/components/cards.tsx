import {
    ArrowDownIcon,
    ArrowUpIcon,
    DetailIcon,
    MinusIcon,
    PlusIcon,
  } from "../constants/generics";
  
  const EventCards = ({ darkMode }: { darkMode: boolean }) => {
    const cards = [
      {
        title: "Total Events",
        value: "100,000",
        icon1: ArrowUpIcon,
        icon2: PlusIcon,
      },
      {
        title: "Active Speakers",
        value: "25",
        icon1: ArrowDownIcon,
        icon2: MinusIcon,
      },
      {
        title: "Total Registrations",
        value: "300",
        icon1: ArrowUpIcon,
        icon2: PlusIcon,
      },
      {
        title: "Total Revenue",
        value: "$500,000",
        icon1: ArrowUpIcon,
        icon2: PlusIcon,
      },
    ];
  
    return (
      <>
        <h1 className={`text-[22px] ${darkMode ? "text-white" : "text-black"}`}>
          Welcome! here's your summary
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 mt-4">
          {cards.map(({ title, value, icon1: Icon1, icon2: Icon2 }) => (
            <div
              key={title}
              className={`p-4 rounded-lg h-[88px] w-full sm:max-w-[255px]  ${
                darkMode
                  ? " bg-[#484554] text-white"
                  : "border border-[#F2F2F7] bg-white text-black"
              }`}
            >
              <div className="flex gap-[6px] items-center">
                <h3
                  className={`text-[16px] font-semibold ${
                    darkMode ? "text-white" : "text-[#64748B]"
                  }`}
                >
                  {title}
                </h3>
                <DetailIcon />
              </div>
              <div className="flex items-center gap-1">
                <p
                  className={`text-[20px] font-semibold ${
                    darkMode ? "text-white" : "text-[#334155]"
                  }`}
                >
                  {value}
                </p>
                <div className="flex items-center">
                  <Icon1 /> <Icon2 />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };
  
  export default EventCards;
  