import { FaRegStar } from "react-icons/fa";
import FadeUpOnScroll from "./FadeUpOnScroll";

const TitleSection = ({ badgeText, title }) => {
  return (
    <>
      {/* Header */}
      <FadeUpOnScroll delay={0.2}>
        <div className="text-center mb-12">
          <div className="bg-[#eff1f6a4] flex items-center w-fit mx-auto pr-4 gap-2 rounded-full ">
            <div className="bg-black p-[10px] rounded-full text-white">
              <FaRegStar className="text-sm" />
            </div>
            <h4 className="text-sm font-medium">{badgeText}</h4>
          </div>
          <h2 className="text-3xl md:text-[54px] font-semibold text-gray-900 md:leading-13 mt-2 lg:w-7/12 mx-auto">
            {title}
          </h2>
        </div>
      </FadeUpOnScroll>
    </>
  );
};

export default TitleSection;
