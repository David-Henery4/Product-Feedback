import { useState } from "react";
import { ArrowDownIcon, PlusIcon, CheckIcon } from "../assets/shared";
import sortData from "../data/sortData";

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
    <div className="w-full col-start-1 col-end-13 bg-lightNavy py-2 px-6 grid grid-cols-sortBarMob gap-x-2 text-[13px] text-white">
      <div className="relative flex items-center gap-[6px]">
        <p className="hover:cursor-pointer" onClick={() => setIsSortOpen(!isSortOpen)}>
          Sort by :{" "}
          <span className="inline-flex justify-center items-center gap-2">
            {currentSort}
            <ArrowDownIcon className="stroke-white" />
          </span>
        </p>
        <div className={`absolute top-14 left-0 bg-white shadow-sortDropdown w-64 rounded-[10px] ${isSortOpen ? "block" : "hidden"}`}>
          <ul>
            {sortInfo.map((s) => {
              return (
                <li
                  className="relative py-3 px-6 text-sm group flex justify-between items-center border-b border-lightNavy/20 last:border-none"
                  key={s?.id}
                  onClick={() => setIsSortOpen(!isSortOpen)}
                >
                  <label htmlFor={s.sortBy}>
                    <input
                      type="radio"
                      name="sort-option"
                      id={s.sortBy}
                      value={s.sortBy}
                      className="absolute top-0 left-0 w-full h-full opacity-0 hover:cursor-pointer"
                      checked={s?.isActive}
                      onChange={() => {
                        handleSort(s);
                      }}
                    />
                    <span>
                      <p className="text-gray group-hover:text-purple">
                        {s.label}
                      </p>
                    </span>
                  </label>
                  {s?.isActive && <CheckIcon />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <button className="bg-purple flex items-center gap-1 font-bold text-iceWhite px-2 py-3 rounded-[10px] hover:bg-pink active:bg-purple">
        <PlusIcon />
        Add Feedback
      </button>
    </div>
  );
};

export default FeedbackBarSection;
