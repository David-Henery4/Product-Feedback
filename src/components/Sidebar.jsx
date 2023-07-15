import { useEffect, useState } from "react";
import placeholderData from "../../data.json";
import PropTypes from "prop-types";

const Sidebar = ({ isSidebarOpen }) => {
  const [currRequestCategories, setCurrRequestCategories] = useState(
    placeholderData?.productRequests
  );
  //
  const handleRemoveDuplicates = (prev) => {
    const categories = [];
    prev.forEach((req) => {
      categories.push(req?.category);
    });
    //
    return [...new Set(categories)].map((cat, i) => {
      return {
        id: i + 1,
        category: cat,
      };
    });
  }
  //
  useEffect(() => {
    setCurrRequestCategories(prev => {
      return handleRemoveDuplicates(prev)
    })
  }, [])
  //
  return (
    <aside
      className={`absolute bg-offWhite top-full right-0 w-3/4 h-[100svh] transition-all p-6 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="bg-white p-6 flex flex-wrap justify-start items-center gap-2 rounded-[10px]">
        <div className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px] capitalize mb-[6px]">
          <p>All</p>
        </div>
        {currRequestCategories?.map((prod) => {
          return (
            <div
              key={prod?.id}
              className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px] capitalize mb-[6px]"
            >
              <p>{prod?.category}</p>
            </div>
          );
        })}
      </div>
      {/**/}
      <div></div>
      {/**/}
    </aside>
  );
};

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool,
};

export default Sidebar;
