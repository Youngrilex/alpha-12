import { PropsWithChildren, useState } from "react";
import { MobileSidebar, SidebarDesktop, TopNav } from "./index";
import BottomNavigation from "./bottomnav";

export function Layout({ children }: PropsWithChildren) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row ${
        darkMode ? "dark bg-[#383544] text-white" : "bg-white text-black"
      }`}
    >
      <div className="hidden sm:flex">
        <SidebarDesktop darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
      <div className="block sm:hidden">
        <MobileSidebar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
      <main className="lg:pl-60 w-full">
        <TopNav darkMode={darkMode} />
        <section>{children}</section>
        <div className="block sm:hidden"><BottomNavigation darkMode={darkMode}/></div>
      </main>
    </div>
  );
}
