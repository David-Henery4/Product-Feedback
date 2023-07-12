import {HamburgerIcon} from "../assets/shared"
import {backgroundHeaderMobile} from "../assets/suggestions"


const NavSection = () => {
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
      <HamburgerIcon className="relative" />
    </nav>
  );
}

export default NavSection