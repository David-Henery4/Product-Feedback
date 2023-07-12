import { useState } from "react";
import { ArrowDownIcon, PlusIcon } from "../assets/shared";
import sortData from "../data/sortData";

const FeedbackBarSection = () => {
  const [sortInfo, setSortInfo] = useState(sortData);
  const [isSortOpen, setIsSortOpen] = useState(false);
  //
  return (
    <div className="w-full col-start-1 col-end-13 bg-lightNavy py-2 px-6 flex justify-between items-center text-[13px] text-white">
      <div className="relative flex items-center gap-[6px]">
        <p>Sort by :</p>
        <p className="inline-flex items-center gap-2">
          Most Upvotes
          <span>
            <ArrowDownIcon className="stroke-white" />
          </span>
        </p>
        <div className="absolute top-10 left-0 py-3 px-6 bg-[#000]">
          <ul>
            {sortInfo.map((s) => {
              return <li className="relative" key={s?.id}>
                <label htmlFor={s.sortBy}>
                  <input
                    type="radio"
                    name="sort-option"
                    id={s.sortBy}
                    value={s.sortBy}
                    className=""
                    checked={s?.isActive}
                    onChange={(e) => {
                      // ABSTRACT & REFACTOR TOMORROW
                      console.log(e.target.checked)
                        setSortInfo((prev) => {
                          return prev.map(i => {
                            if (i.id === s.id) {
                              i.isActive = true
                              return i
                            }
                            if (i.id !== s.id) {
                              i.isActive = false
                              return i
                            }
                            return i
                          })
                        })
                    }}
                  />
                  <span>
                    <p className="text-gray">{s.label}</p>
                  </span>
                </label>;
              </li>;
            })}
          </ul>
        </div>
      </div>
      <button className="bg-purple flex items-center gap-1 font-bold text-iceWhite px-2 py-3 rounded-[10px]">
        <PlusIcon />
        Add Feedback
      </button>
    </div>
  );
};

export default FeedbackBarSection;
