import { useEffect, useState } from "react";
import {HamburgerIcon, CloseIcon} from "../assets/shared"
import {backgroundHeaderMobile} from "../assets/suggestions"
import { Sidebar } from "../components";


const NavSection = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(false)
  //
  const toggleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  //
  useEffect(() => {
    if (isSidebarOpen)document.body.classList.add("overflow-y-hidden")
    if (!isSidebarOpen)document.body.classList.remove("overflow-y-hidden")
  }, [isSidebarOpen])
  //
  return (
    <nav className="relative w-full col-start-1 col-end-13 px-6 py-4 flex justify-between items-center text-white">
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={backgroundHeaderMobile}
        alt="header background gradient"
      />
      <div className="relative">
        <h1 className="font-bold text-[15px] -tracking-[0.19px]">
          Frontend Mentor
        </h1>
        <p className="text-[13px] font-medium">Feedback Board</p>
      </div>
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
      <Sidebar isSidebarOpen={isSidebarOpen}/>
    </nav>
  );
}

export default NavSection