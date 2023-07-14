import placeholderData from "../../data.json";
import { useState } from "react";
import { FeedbackBox } from "../components";

const FeedbackListSection = () => {
  const [tempRequestsData, setTempRequestsData] = useState(
    placeholderData?.productRequests
  );
  //
  return (
    <section className="mt-8 mb-14 col-start-2 col-end-12 grid gap-4">
      {tempRequestsData?.map((tData) => {
        return (
          <FeedbackBox key={tData?.id} {...tData} />
        );
      })}
    </section>
  );
};

export default FeedbackListSection;
