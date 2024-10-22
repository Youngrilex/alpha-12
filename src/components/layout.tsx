import { PropsWithChildren, useState } from "react";
import { MobileSidebar, SidebarDesktop, TopNav } from "./index";
import BottomNavigation from "./bottomnav";

export function Layout({ children }: PropsWithChildren) {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div
      className={`flex flex-col sm:flex-row min-h-screen ${
        darkMode ? "dark bg-[#383544] text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar for desktop view */}
      <aside className="hidden sm:flex">
        <SidebarDesktop darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </aside>

      {/* Sidebar for mobile view */}
      <aside className="block sm:hidden">
        <MobileSidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </aside>

      {/* Main content area */}
      <main className="lg:pl-60 w-full flex-grow">
        <header>
          <TopNav darkMode={darkMode} />
        </header>
        <section>{children}</section>
        <nav className="block sm:hidden">
          <BottomNavigation darkMode={darkMode} />
        </nav>
      </main>
    </div>
  );
}
