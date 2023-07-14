import { useState } from "react";
import { ArrowDownIcon, PlusIcon } from "../assets/shared";
import sortData from "../data/sortData";
import { SortDropdown } from "../components";

const FeedbackBarSection = () => {
  const [currentSort,setCurrentSort] = useState("Most Upvotes")
  const [sortInfo, setSortInfo] = useState(sortData);
  const [isSortOpen, setIsSortOpen] = useState(false);
  //
  const handleSort = (s) => {
    setSortInfo((prev) => {
      return prev.map((i) => {
        if (i.id === s.id) {
          i.isActive = true;
          setCurrentSort(i.label)
        } else {
          i.isActive = false;
        }
        return i;
      });
    });
  };
  //
  return (
    <div
      className={`w-full col-start-1 col-end-13 bg-lightNavy py-2 px-6 grid grid-cols-sortBarMob gap-x-2 text-[13px] text-white after:fixed after:top-0 after:left-0 after:w-full after:h-full after:z-10 ${
        isSortOpen ? "after:block" : "after:hidden"
      }`}
      onClick={() => isSortOpen && setIsSortOpen(false)}
    >
      <div className="relative z-20 flex items-center gap-[6px]">
        <p
          className="hover:cursor-pointer"
          onClick={() => setIsSortOpen(!isSortOpen)}
        >
          Sort by :{" "}
          <span className="inline-flex justify-center items-center gap-2">
            {currentSort}
            <ArrowDownIcon className="stroke-white" />
          </span>
        </p>
        <SortDropdown
          dropdownInfo={{ isSortOpen, setIsSortOpen, sortInfo, handleSort }}
        />
      </div>
      <button className="bg-purple flex items-center gap-1 font-bold text-iceWhite px-2 py-3 rounded-[10px] hover:bg-pink active:bg-purple">
        <PlusIcon />
        Add Feedback
      </button>
    </div>
  );
};

export default FeedbackBarSection;
