/* eslint-disable react-hooks/rules-of-hooks */
import { Link, useMatch } from "react-router-dom";
import { sidebarLinks, TSidebarLinks } from "../constants/sidebarlink";
import { useBoolean } from "usehooks-ts";
import { cn } from "../lib/utils";
import { CollapseIcon, CollCollIcon, MobileMenuIcon } from "../constants/generics";
import { Switch } from "./switch";
import { useEffect, useRef, useState } from "react";
import { IoIosClose } from "react-icons/io";

// SidebarItem component for both Desktop and Mobile Sidebars
export function SidebarItem({
  link,
  click,
  isCollaspedBtn,
  isCollapsed,
  disableActive = false,
}: {
  link: TSidebarLinks;
  click?: () => void;
  isCollaspedBtn?: boolean;
  isCollapsed: boolean;
  disableActive?: boolean;
}) {
  const isActive = !disableActive && useMatch({ path: `${link.url ?? ""}/*`, end: true });
  
  return (
    <Link
      to={link.url}
      className={`flex hover:bg-gray-100 rounded-[3px] gap-4 items-center px-2 w-full py-2 transition-all ${
        isActive ? "bg-[#FCF7FF]" : ""
      }`}
      onClick={() => click && isCollaspedBtn && click()}
    >
      {isCollapsed && link.collapsedIcon ? (
        <link.collapsedIcon color={isActive ? "#8576FF" : "#ADA9BB"} />
      ) : (
        <link.icon color={isActive ? "#8576FF" : "#ADA9BB"} />
      )}
      {!isCollapsed && (
        <span className={`flex w-full gap-4 items-center justify-between text-[14px] leading-[20px] ${isActive ? "text-[#8576FF]" : "#ADA9BB"}`}>
          {link.label}
          {link.badgeCount && (
            <span className="bg-[#F43F5E] h-6 w-6 text-white text-xs rounded-full flex items-center justify-center">
              {link.badgeCount}
            </span>
          )}
        </span>
      )}
    </Link>
  );
}


export function SidebarDesktop({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void; }) {
  const { value: IsCollapse, toggle } = useBoolean();

  return (
    <aside className={cn("lg:fixed w-full lg:left-0 lg:top-0 flex-col lg:h-screen z-50 shadow-xl transition-all", {
      "w-[64px]": IsCollapse,
      "w-[240px]": !IsCollapse,
      "bg-[#484554] text-[#FFFFFF]": darkMode,
      "bg-white text-[#334155]": !darkMode,
    })}>
      <div className={`m-4 ${IsCollapse ? "w-[32px] h-[32px]" : "w-[64px] h-[32px] flex items-center justify-center "} bg-[#93C5FD] border-dashed border-[1px] border-[#2563EB]`}>
        <Link to="/">
          <span className={`${IsCollapse ? "hidden" : "text-[12px] font-[600] text-[#2563EB]"}`}>Full Logo</span>
        </Link>
      </div>

      <div className="flex flex-col space-y-2 mt-2 px-4">
        {sidebarLinks.map((link) => (
          <SidebarItem key={link.url} link={link} isCollapsed={IsCollapse} />
        ))}
        <SidebarItem
          isCollapsed={IsCollapse}
          isCollaspedBtn
          disableActive
          link={{
            label: "Collapse",
            url: "",
            icon: IsCollapse ? CollCollIcon : CollapseIcon,
          }}
          click={toggle}
        />
        {!IsCollapse && (
          <div className="flex items-center gap-2">
            <Switch className="bg-[#E2E8F0] w-[24px] h-[16px]" checked={darkMode} onCheckedChange={toggleDarkMode} />
            <span className="text-xs leading-[16px]">Dark mode</span>
          </div>
        )}
        <div className="w-full flex items-center space-x-2 py-2">
          <img src="/Icon.png" alt="avatar" className="w-[32px] h-[32px] rounded-full border-[1px]" />
          {!IsCollapse && (
            <div className="text-[12px]">
              <p>Rudra Devi</p>
              <p>rudra.devi@gmail.com</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

// Mobile Sidebar
export function MobileSidebar({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void; }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { value: IsCollapse } = useBoolean();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => setIsSidebarOpen((prevState) => !prevState);

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  return (
    <>
      <aside className={`px-5 h-[64px] border-b-[1px] flex items-center justify-between sm:hidden ${darkMode ? 'bg-[#484554]' : 'bg-white'}`}>
        <div className="flex items-center justify-center h-[32px] w-[64px] bg-[#93C5FD] border-dashed border-[1px] border-[#2563EB]">
          <Link to="/">
            <span className="flex text-[12px] font-[600] text-[#2563EB]">Full Logo</span>
          </Link>
        </div>
        {isSidebarOpen ? (
          <IoIosClose onClick={toggleSidebar} className={`absolute top-4 right-4 ${darkMode ? 'bg-[#ADA9BB]' : 'bg-white'} rounded-full border h-[24px] w-[24px]`} />
        ) : (
          <div onClick={toggleSidebar}>
            <MobileMenuIcon color={darkMode ? "#FFFF" : "#64748B"} />
          </div>
        )}
      </aside>

      {isSidebarOpen && (
        <div ref={sidebarRef} className="flex flex-col space-y-2 mt-2 px-4 h-[calc(100vh-64px)]">
          {sidebarLinks.map((link) => (
            <SidebarItem key={link.url} link={link} isCollapsed={IsCollapse} />
          ))}
          <div className="flex items-center gap-2">
            <Switch className="bg-[#E2E8F0] w-[24px] h-[16px]" checked={darkMode} onCheckedChange={toggleDarkMode} />
            <span className="text-xs leading-[16px]">Dark mode</span>
          </div>
          <div className="w-full flex items-center space-x-2 py-2">
            <img src="/Icon.png" alt="avatar" className="w-[32px] h-[32px] rounded-full border-[1px]" />
            {!IsCollapse && (
              <div className="text-[12px]">
                <p>Rudra Devi</p>
                <p>rudra.devi@gmail.com</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
