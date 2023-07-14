import { ArrowUpIcon, CommentsIcon } from "../assets/shared";
import placeholderData from "../../data.json";
import { useState } from "react";

const FeedbackListSection = () => {
  const [tempRequestsData, setTempRequestsData] = useState(
    placeholderData?.productRequests
  );
  //
  return (
    <section className="mt-8 mb-14 col-start-2 col-end-12 grid gap-4">
      {tempRequestsData?.map((tData) => {
        return (
          <div
            key={tData?.id}
            className="grid justify-items-start grid-cols-feebackBox bg-white rounded-[10px] p-6"
          >
            <div className="mb-4 col-start-1 col-end-3">
              <h2 className="text-[13px] font-bold text-lightNavy -tracking-[0.18px]">
                {tData?.title}
              </h2>
              <p className="text-[13px] text-gray my-2">{tData?.description}</p>
              <span className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px] capitalize">
                {tData?.category}
              </span>
            </div>

            <div className="inline-flex justify-center items-center gap-[10px] bg-iceWhite py-[6px] px-4 rounded-[10px]">
              <ArrowUpIcon className="stroke-blue" />
              <p className="text-[13px] font-bold -tracking-[0.18px] text-lightNavy">
                {tData?.upvotes}
              </p>
            </div>
            <div className="flex justify-center items-center gap-1">
              <CommentsIcon />
              <p>{tData?.comments ? tData?.comments?.length : 0}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeedbackListSection;
