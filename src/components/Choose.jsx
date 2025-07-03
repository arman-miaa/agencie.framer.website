import { FaRegStar } from "react-icons/fa";
import Slide from "./Slide";


const Choose = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 mt-22">
      <div className="">
        {/* benefits btn */}
        <div className="bg-gray-100 flex items-center w-fit pr-4 gap-2 rounded-full ">
          <div className="bg-black p-2 rounded-full text-white">
            <FaRegStar className="text-sm" />
          </div>
          <h4 className="text-sm font-medium">Benefits</h4>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold leading-tight">
          See why partnering with <br className="hidden md:block" />
          us is the smartest move.
        </h3>
      </div>
      <Slide />
    </div>
  );
};

export default Choose;
