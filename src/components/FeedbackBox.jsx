import { ArrowUpIcon, CommentsIcon } from "../assets/shared";
import PropTypes from "prop-types";


const FeedbackBox = ({id,title,description,category, comments, upvotes}) => {
  return (
    <div
      key={id}
      className="grid justify-items-start grid-cols-feebackBox bg-white rounded-[10px] p-6 tab:py-7 tab:px-8 tab:items-start tab:grid-flow-col tab:gap-10 tab:grid-cols-feebackBoxTablet"
    >
      <div className="mb-4 col-start-1 col-end-3 tab:col-start-2 tab:col-end-3">
        <h2 className="text-[13px] font-bold text-lightNavy -tracking-[0.18px] tab:text-lg">
          {title}
        </h2>
        <p className="text-[13px] text-gray my-2 tab:text-base tab:mb-3 tab:mt-1">
          {description}
        </p>
        <span className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px] capitalize">
          {category}
        </span>
      </div>

      <div className="inline-flex justify-center items-center gap-[10px] bg-iceWhite py-[6px] px-4 rounded-[10px] tab:col-start-1 tab:col-end-2 tab:flex-col tab:px-2 tab:py-3">
        <ArrowUpIcon className="stroke-blue" />
        <p className="text-[13px] font-bold -tracking-[0.18px] text-lightNavy">
          {upvotes}
        </p>
      </div>

      <div className="flex justify-center items-center gap-1 tab:col-start-3 tab:col-end-4 tab:self-center">
        <CommentsIcon />
        <p className="text-[13px] tab:text-base text-lightNavy font-bold">
          {comments ? comments?.length : 0}
        </p>
      </div>
    </div>
  );
}

FeedbackBox.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  comments: PropTypes.array,
  category: PropTypes.string,
  upvotes: PropTypes.number
}

export default FeedbackBox

