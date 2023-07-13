import { ArrowUpIcon } from "../assets/shared";

const FeedbackListSection = () => {
  return (
    <section className="mt-8 col-start-2 col-end-12">

      <div className="bg-white rounded-[10px] p-6">

        <div className="mb-4">
          <h2 className="text-[13px] font-bold text-lightNavy -tracking-[0.18px]">
            Add tags for solutions
          </h2>
          <p className="text-[13px] text-gray my-2">
            Easier to search for solutions based on a specific stack.
          </p>
          <span className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px]">
            Enhancement
          </span>
        </div>

          <div className="inline-flex justify-center items-center gap-[10px] bg-iceWhite py-[6px] px-4 rounded-[10px]">
            <ArrowUpIcon className="stroke-blue" />
            <p className="text-[13px] font-bold -tracking-[0.18px] text-lightNavy">99</p>
          </div>
          <div>

          </div>

      </div>

    </section>
  );
};

export default FeedbackListSection;
