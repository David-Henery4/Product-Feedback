import { backgroundHeaderMobile } from "../assets/suggestions";
import {Titles} from "../components"

const TitleBox = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-start p-6 justify-end rounded-[10px] overflow-hidden lap:pt-[62px]">
      <Titles/>
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={backgroundHeaderMobile}
        alt="header background gradient"
      />
    </div>
  );
}

export default TitleBox