import { useEffect, useState } from "react";
import { HamburgerIcon, CloseIcon } from "../assets/shared";
import { backgroundHeaderMobile } from "../assets/suggestions";
import { Sidebar, CategoryBox, RoadmapBox, TitleBox, Titles } from "../components";

const NavSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //
  const toggleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  //
  useEffect(() => {
    if (isSidebarOpen) document.body.classList.add("overflow-y-hidden");
    if (!isSidebarOpen) document.body.classList.remove("overflow-y-hidden");
  }, [isSidebarOpen]);
  //
  return (
    <nav className="relative w-full col-start-1 col-end-13 px-6 py-4 flex justify-between items-center text-white smTab:px-10 tab:col-start-2 tab:col-end-12 tab:p-0 tab:mb-10">
      <div className="tab:hidden">
        <Titles/>
      </div>
      <img
        className="absolute top-0 left-0 w-full h-full tab:hidden"
        src={backgroundHeaderMobile}
        alt="header background gradient"
      />
      <div className="hidden w-full justify-between items-center h-full gap-[10px] tab:flex">
        <TitleBox />
        <CategoryBox />
        <RoadmapBox />
      </div>

      {/* SIDEBAR & BURGER MENU */}
      <div className="tab:hidden">
        {isSidebarOpen ? (
          <CloseIcon
            className="relative hover:cursor-pointer hover:rotate-90 transition-all"
            onClick={toggleSidebarClick}
          />
        ) : (
          <HamburgerIcon
            className="relative hover:cursor-pointer"
            onClick={toggleSidebarClick}
          />
        )}
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </nav>
  );
};

export default NavSection;
