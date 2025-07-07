import { FaStar } from "react-icons/fa";
import Button1 from "../shared/Button1";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import HeadingMotionLine from "../shared/HeadingMotionLine";


const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-10 flex flex-col items-center md:items-start text-center md:text-left ">
  
    

      <h1 className="text-4xl md:text-5xl lg:text-[65px]   font-medium lg:leading-16 ">
        Big ideas, smart strategies,
        <span className="hidden md:inline">
          <br />
        </span>
        and endless creativity to
        <span className="hidden md:inline">
          <br />
        </span>
        supercharge⚡your brand!
      </h1>
      <p className="text-xl font-medium text-[#0f0f0f96] py-6 pt-7 ">
        Your go-to agency for designs that inspire and strategies{" "}
        <span className="hidden md:inline">
          <br />
        </span>
        that deliver. We turn ideas into lasting impressions.
      </p>
      <Button1
        text="Get Template"
        link="https://www.framer.com/marketplace/templates/agenium/?via=realmehedi1"
      />
      {/* review */}
      <div className="flex items-center gap-2 mt-6">
        <span className="flex gap-1 text-[#F15533]">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <FaRegStarHalfStroke />
        </span>
        <p className="text-gray-400 text-sm">Over 200+ Five Star Reviews</p>
      </div>
    </div>
  );
}

export default Banner