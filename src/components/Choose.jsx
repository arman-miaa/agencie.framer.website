import { FaRegStar } from "react-icons/fa";
import Slide from "./Slide";


const Choose = () => {
  return (
    <div className="container mx-auto px-4 md:px-20 py-12">
      <div className="mb-8">
        {/* benefits btn */}
        <div className="bg-gray-200 flex items-center w-fit pr-4 gap-2 rounded-full mb-6">
          <div className="bg-black p-3 rounded-full text-white">
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
