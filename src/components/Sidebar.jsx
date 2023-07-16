import PropTypes from "prop-types";
import { CategoryBox, RoadmapBox } from "../components";

const Sidebar = ({ isSidebarOpen }) => {
  //
  return (
    <aside
      className={`absolute bg-offWhite top-full right-0 w-3/4 h-[100svh] transition-all p-6 flex flex-col justify-start items-center gap-6 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <CategoryBox />
      {/**/}
      <RoadmapBox/>
      {/**/}
    </aside>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
