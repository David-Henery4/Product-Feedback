import { ArrowUpIcon, CommentsIcon } from "../assets/shared";
import PropTypes from "prop-types";


const FeedbackBox = ({id,title,description,category, comments, upvotes}) => {
  return (
    <div
      key={id}
      className="grid justify-items-start grid-cols-feebackBox bg-white rounded-[10px] p-6"
    >
      <div className="mb-4 col-start-1 col-end-3">
        <h2 className="text-[13px] font-bold text-lightNavy -tracking-[0.18px]">
          {title}
        </h2>
        <p className="text-[13px] text-gray my-2">{description}</p>
        <span className="text-blue font-semibold text-[13px] py-[6px] px-4 bg-iceWhite rounded-[10px] capitalize">
          {category}
        </span>
      </div>

      <div className="inline-flex justify-center items-center gap-[10px] bg-iceWhite py-[6px] px-4 rounded-[10px]">
        <ArrowUpIcon className="stroke-blue" />
        <p className="text-[13px] font-bold -tracking-[0.18px] text-lightNavy">
          {upvotes}
        </p>
      </div>
      <div className="flex justify-center items-center gap-1">
        <CommentsIcon />
        <p>{comments ? comments?.length : 0}</p>
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

